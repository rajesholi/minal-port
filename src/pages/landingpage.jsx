import { useState, useEffect } from "react";
import "./landingpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";


function LandingPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverActive, setHoverActive] = useState(false);
  const [isTouchActive, setIsTouchActive] = useState(false);

  const isPhoneView = () => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth <= 768;
  };

  // Mask is active when hovering on non-phone views, or when a touch press is active on phones
  const maskActive = (hoverActive && !isPhoneView()) || isTouchActive;

  useEffect(() => {
    const circle = document.querySelector('#distortedMask circle');
    if (circle) {
      // Control radius to show/hide distortion effect without moving the circle
      const desiredR = maskActive ? (isPhoneView() ? '110' : '100') : '0';
      circle.setAttribute('r', desiredR);
    }
  }, [maskActive]);

  const handlePointerMove = (e) => {
    if (e.pointerType === 'touch' && !isTouchActive) return;
    if (e.pointerType !== 'touch' && !hoverActive) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    updatePosition(x, y, e.currentTarget, e.pointerType);
  };

  const handlePointerDown = (e) => {
    if (e.pointerType === 'touch') {
      setIsTouchActive(true);
      handlePointerMove(e);
    } else {
      setHoverActive(true);
    }
  };

  const handlePointerUp = (e) => {
    if (e.pointerType === 'touch') {
      setIsTouchActive(false);
      const circle = document.querySelector('#distortedMask circle');
      if (circle) circle.setAttribute('r', '0');
    } else {
      setHoverActive(false);
    }
  };

  // Shared update helper used by pointer and touch handlers
  const updatePosition = (x, y, target, pointerType = 'touch') => {
    setPosition({ x, y });

    const circle = document.querySelector('#distortedMask circle');
    if (circle) {
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      const moveRadius = pointerType === 'touch' ? 110 : 100;
      circle.setAttribute('r', String(moveRadius));
    }

    const turbulence = document.querySelector('#displacementFilter feTurbulence');
    const displacement = document.querySelector('#displacementFilter feDisplacementMap');
    if (turbulence && displacement && target) {
      const rect = target.getBoundingClientRect();
      if (pointerType === 'touch') {
        const freq = 0.005 + (x / rect.width) * 0.02;
        const scale = 10 + (y / rect.height) * 40;
        turbulence.setAttribute('baseFrequency', freq);
        displacement.setAttribute('scale', scale);
      } else {
        const freq = 0.01 + (x / rect.width) * 0.1;
        const scale = 20 + (y / rect.height) * 80;
        turbulence.setAttribute('baseFrequency', freq);
        displacement.setAttribute('scale', scale);
      }
    }
  };

  // Touch handlers that do not prevent scrolling
  const handleTouchStart = (e) => {
    setIsTouchActive(true);
    const touch = e.touches && e.touches[0];
    if (!touch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    updatePosition(x, y, e.currentTarget, 'touch');
  };

  const handleTouchMove = (e) => {
    if (!isTouchActive) return;
    const touch = e.touches && e.touches[0];
    if (!touch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    updatePosition(x, y, e.currentTarget, 'touch');
  };

  const handleTouchEnd = (e) => {
    setIsTouchActive(false);
    const circle = document.querySelector('#distortedMask circle');
    if (circle) circle.setAttribute('r', '0');
  };
  return (
    <div className="landing-container">
      <svg width="0" height="0">
        <defs>
          <filter id="displacementFilter">
            <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="turbulence"/>
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" />
          </filter>
          <mask id="distortedMask">
            <circle cx={position.x} cy={position.y} r="100" fill="white" filter="url(#displacementFilter)" />
          </mask>
        </defs>
      </svg>
      
      <div
        className="hero-hall"
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerEnter={() => setHoverActive(true)}
        onPointerLeave={() => setHoverActive(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
      <section className="hero2" style={{
        WebkitMask: 'url(#distortedMask)',
        mask: 'url(#distortedMask)'
      }}>
        <div className="text-content">
          <p className="greeting">Plz Stay</p>
          <h1 className="headline">
            <div className="webdesigner"> <p>Crazy</p> <p>Designer</p> </div>
            <div className="amp-spacer">
            <span className="amp">&</span>
            <span className="photographer"> I know You</span>
            </div>
          </h1>
          <p className="subline">Powered by creativity and questionable sleep schedules.</p>
          <div className="cta-buttons">
            <button className="cta">You need a designer</button>
          </div>
          <div className="client-logos">
          <a href="https://www.instagram.com/theunknown_137" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="client-logo" size="2x"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="client-logo" size="2x" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="client-logo" size="2x" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="client-logo" size="2x"
            />
          </a>
        </div>
        </div>
        <div className="portrait">
          <img src="/src/assets/hero2.png" alt="Young Professional" />
        </div>
        
      </section>
      <section className="hero1">
        <div className="portrait">
          <img src="/src/assets/hero2.png" alt="Young Professional" />
        </div>
        <div className="text-content">
          <p className="greeting">Hey! i am Minal</p>
          <h1 className="headline">
            <div className="webdesigner"> <p>Frontend</p> <p>Developer</p> </div>
            <div className="amp-spacer">
            <span className="amp">&</span>
            <span className="photographer"> Graphic Designer</span>
            </div>
          </h1>
          <p className="subline">Graphic Designer & Front-End Developer crafting visually engaging and user-friendly digital experiences.</p>
          <div className="cta-buttons">
            <button href="#" className="cta">You need a Frontend Developer</button>

          </div>
          <div className="client-logos">
          <a href="https://www.instagram.com/theunknown_137" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="client-logo" size="2x"/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="client-logo" size="2x" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="client-logo" size="2x" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} className="client-logo" size="2x"
            />
          </a>
        </div>
        </div>
        
      </section>
      </div>
    </div>
    
  );
}

export default LandingPage;

import LandingPage from '../pages/landingpage'
import Mywork from '../pages/mywork'
import Skill from '../pages/skill'

import ExperienceTimeline from '../pages/exp'

function HomePage() {
  return (
    <div>
      <LandingPage />
      
      <Mywork />
      <ExperienceTimeline />
      <Skill />
    </div>
  )
}

export default HomePage

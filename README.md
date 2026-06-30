# portfolio-ver2

A simplified static React version of the portfolio app.

## Run locally

1. `cd portfolio/portfolio-ver2`
2. `npm install`
3. `npm run dev`

## What changed

- Removed backend API calls.
- Added local data in `src/data/portfolioData.js`.
- Refactored `src/pages/mywork.jsx` and `src/pages/skill.jsx` to render local arrays.
- Kept routing and general app structure from the original React app.

## Notes

- Backend files such as `portfolio_backend/` are not required for this static version.
- If you want to fully remove backend dependencies later, you can delete `portfolio_backend/` and the Python `.venv/` folder.

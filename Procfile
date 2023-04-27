web: gunicorn -w 4 -k uvicorn.workers.UvicornWorker app:app
release: npm run build --prefix frontend
web: npm start --prefix frontend
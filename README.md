<!-- #image --><img align="center" src="https://apod.nasa.gov/apod/image/9703/dwingeloo1_int.gif"></br><!-- #end -->


Add this code in `.github/workflows/nasa-images.yml`
```YAML
name: Awesome space picture
# Get an awesome space pic from NASA in your README!!!
on:
  schedule: 
    - cron: "0 */2 * * *"
  
  workflow_dispatch:

jobs: 
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - name: setup node 12
        uses: actions/checkout@v3
        with:
          node-version: 12.x
      - run: npm run start
      - name: Commit and push updated file
        run: |
          git config --global user.name "rndmcodeguy"
          git config --global user.email "shantanu.mane.200@outlook.com"
          git add .
          git commit -m "docs ✨ new pic added : master"
          git push
```

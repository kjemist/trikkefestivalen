# Trikkefestivalen

## What is this repo?
This repository stores files associated with the website for Trikkefestivalen, a volounteer initiative to arrange a non-profit music festival on a local, historical tram in Bergen, Norway :norway:


## How to run a local instance

1. clone this repo to a local folder on your 
2. run `npm run`
3. the website should open in your loval browser

## Deploy website

on the `main` branch, run `npm run deploy` to start deployment. Changes will automatically be pushed from the `main` branch to the `gh-pages` branch, and a new deployment will also be started. It may take up to a few minutes before the changes take effect on https://kjemist.github.io/trikkefestivalen/ 

## Changes from the main template for succesful deployment

The original React template used to refer to a Google Sheet to update the site content. We have reverted to referring to *local content*, which is for our uses bith easier, more convenient and quicker. 

We have also changed the site from running on browser routing to hash routing in order to be able to run on GitHub pages.

## Contributions

If you want to contribute, do not hesitate to get in touch (illimar.rekand@gmail.com), open an issue or submit a pull request.

## Contributors

Illimar Rekand (illimar.rekand@gmail.com) \
Kai Waløen (kai.waloen@gmail.com | www.kwal.no)

## License

Source code in this repository is covered by (i) a dual license under the Server
Side Public License, v 1 and the Elastic License 2.0 or (ii) an Apache License
2.0 compatible license or (iii) solely under the Elastic License 2.0, in each
case, as noted in the applicable header. The default throughout the repository
is a dual license under the Server Side Public License, v 1 and the Elastic
License 2.0, unless the header specifies another license.

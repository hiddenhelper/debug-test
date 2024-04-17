# Canny Debugging Test

Howdy Candidate, we've created this pared down version of Canny to get a better idea of your experience debugging web applications. Best of luck!

## Getting Started

1. **Initialize your environment**

We recommend using nvm for managing node versions.

Install nvm from [here](https://github.com/creationix/nvm)

Then install the node version for this assessment:

```sh
nvm i
```

1. **Install dependencies**

Next you'll need to install this app

```sh
npm install
```

1. **Run the backend**

The backend is a node server. Everything to do with the server lives in `/server`.

Terminal tab #1:

```sh
npm run backend
```

1. **Run the frontend**

Webpack is used to bundle and serve our app. Everything to do with the frontend lives in `/app`.

Terminal tab #2:

```sh
npm run frontend
```

Once everything is running, you should see the app running http://127.0.0.1:8080.

## Customer Issues

For each of the following issues:

1. Identify the issue
1. Apply the fix
1. Provide a response to each technical customer in 1-2 sentences

**Customer 1:** When I open the application, my posts do not load and all I see is a 'server error'.

**Answer:** After conducting an analysis, it was determined that the token had expired. Consequently, a new token was generated and subsequently applied within the application.  

**Customer 2:** When I click on "Top" or "Old", the selector does not update with my new selection.

**Answer:** The selector fails to update the label promptly due to its current sequencing. To address this issue, I propose reorganizing the sequence of updating the selector to ensure timely label updates, even while the menu remains open. 

**Customer 3:** When I sort by "Top", there are posts with only 28 votes ranking higher than posts with 180 votes!

**Answer:** I observed that the data retrieved from the server is sorted based on the 'Old' and 'New' filters. Consequently, I implemented a sorting method for the 'Top' filter as well.

**Customer 4:** When I page through posts, although the posts are changing, the vote count in the top left corner does not match the total count of votes of the displayed posts.

**Answer:** The error originates from the frontend, where the total votes are not calculated during the data fetching process. To address this, I have incorporated a vote recount function after fetching the post data.

## 🎉 You're Done 🎉

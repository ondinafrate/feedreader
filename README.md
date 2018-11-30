# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

# Development Strategy

For a refresher (or reference) before you begin writing code, we recommend reviewing the content from [JavaScript Testing](https://www.udacity.com/course/javascript-testing--ud549). Your project will be evaluated by a Udacity code reviewer according to the [Feed Reader Testing project rubric](https://review.udacity.com/#!/rubrics/18/view). Please review for detailed project requirements.


The test suite writes a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty

The test suite writes a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
    
The test suite writes a new test suite named `"The menu"`
  
The test suite writes a test that ensures the menu element is hidden by default
  
The test suite writes a test that ensures the menu changes visibility when the menu icon is clicked.
   
The test suite writes a test suite named `"Initial Entries"`
    
The test suite writes a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
  
The test suite writes a test suite named `"New Feed Selection"
   
The test suite writes a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes
    * How is this test different from the previous test?

Download repository to your computer and open it in your browser. Open file index.html in browser. The test results will be displayed at the bottom of the page.

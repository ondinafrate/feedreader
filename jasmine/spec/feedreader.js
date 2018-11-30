
$(function() {

    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



        it('has URL defined and are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        it('has name defined and are not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', function() {

        it('menu element is hidden', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        it('menu changes visibility when the menu icon is clicked', function() {
            $('a.menu-icon-link').trigger('click'); // show menu
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').trigger('click'); // hide menu again
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    })


    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

    it('has at least one single entry', function() {
        expect($('.feed .entry').length).toBeGreaterThan(0);
    });
});


 describe('New Feed Selection', function() {
             var oldFeed;

             beforeEach(function(done) {
                 loadFeed(0, function() {
                     // store old feed
                     oldFeed = $('.feed').html();
                     // fetch newer feed
                     loadFeed(1, done);
                 });
             });


             loadFeed(2, function() {
                 it('is different from old', function() {
                     expect($('.feed').html()).not.toBe(oldFeed);
                 });
             });
         }());

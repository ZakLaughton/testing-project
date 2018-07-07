/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /*
     * Ensure the feeds are present and valid.
     */
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has a URL object that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).toBeGreaterThan(0);
            });
        });


        it('has a name object that is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });

    /*
     * Ensure the menu responds to clicks.
     */
    describe('The Menu', function() {
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('toggles visibility on click', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass("menu-hidden")).not.toBe(true);
            menuIcon.click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });

    /*
     * Ensure entries exist.
     */
    describe('Initial Entries', function() {
        beforeEach(function(done) {
           loadFeed(0, done);
        }); 

        it('.feed has at least one .entry after loadFeed()', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    /*
     * Ensure that different feeds return different content.
     */
    describe('New Feed Selection', function() {
        let originalFeed;
        let newFeed;

        beforeEach(function(done) {
            // Load a feet and store it in originalFeed...
            loadFeed(0, function() {
                originalFeed = $('.feed').html();
                
                // ...then load a new feed and store it in newFeed
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        });
        
        it('has new contents after loadFeed', function() {
            // Compare originalFeed and newFeed
            expect(originalFeed).not.toEqual(newFeed);
        });
    });
}());

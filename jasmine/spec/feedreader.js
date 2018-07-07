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

        it('has a URL and is not empty', function() {
            allFeeds.forEach(function(value) {
                expect(value.url).toBeDefined();
                expect(value.url).not.toBeNull();
            });
        });


        it('has a name and is not empty', function() {
            allFeeds.forEach(function(value) {
                expect(value.name).toBeDefined();
                expect(value.name).not.toBeNull();
            });
        });
    });

    /*
     * Ensure the menu responds to clicks.
     */
    describe('The Menu', function() {
        it('is hidden by default', function() {
            expect(document.querySelector('body').classList).toContain('menu-hidden');
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
           loadFeed(0, function() {
               done();
           });
        }); 

        it('.feed has at least one .entry after loadFeed()', function(done) {
            expect($('.feed .entry-link').length).toBeGreaterThan(0);
            done();
        });
    });

    /*
     * Ensure that different feeds return different content.
     */
    describe('New Feed Selection', function() {
        let originalFeed;
        let newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                // Store first feed in originalFeed
                originalFeed = $('.feed').html();
                done();
                // Load a new feed and store it in newFeed
                loadFeed(1, function() {
                    newFeed = $('.feed').html();
                    done();
                });
            });
        }); 
        
        it('has new contents after loadFeed', function(done) {
            // Compare originalFeed and newFeed
            expect(originalFeed).not.toEqual(newFeed);
            done();
        });
    });
}());

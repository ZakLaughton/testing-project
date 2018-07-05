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

    describe('The Menu', function() {
        it('is hidden by default', function() {
            expect(document.querySelector('body').classList).toContain('menu-hidden');
        });

        it('toggles visibility on click', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(document.querySelector('body').classList).not.toContain('menu-hidden');
            menuIcon.click();
            expect(document.querySelector('body').classList).toContain('menu-hidden');
        });
    });
    describe('Initial Entries', function() {
        beforeEach(function(done) {
           container = $('.feed');
           loadFeed(0, function() {
               done();
           });
        }); 

        it('.feed has at least one .entry after loadFeed()', function(done) {
            expect(container.find('.entry-link').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        let originalFeed;
        let newFeed;

        beforeEach(function(done) {
            let container = $('.feed');
            loadFeed(0, function() {
                // Store first feed in originalFeed
                originalFeed = container.contents();
                done();
                // Load a new feed and store it in newFeed
                loadFeed(1, function() {
                    newFeed = container.contents();
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

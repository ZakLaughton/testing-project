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
            })
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name and is not empty', function() {
            allFeeds.forEach(function(value) {
                expect(value.name).toBeDefined();
                expect(value.name).not.toBeNull();
            })
        });
    });

    describe('The Menu', function() {
        it('is hidden by default', function() {
            expect(document.querySelector('body').classList).toContain('menu-hidden');
        })

        it('toggles visibility on click', function() {
            menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect(document.querySelector('body').classList).not.toContain('menu-hidden');
            menuIcon.click();
            expect(document.querySelector('body').classList).toContain('menu-hidden');
        })
    })
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        
    })

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());

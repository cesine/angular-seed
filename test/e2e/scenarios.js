'use strict';
define(
    [ 'test/e2e/dependency', 'test/e2e/shim' ],
    function(seeifrequirecanbeusedtoloadadependancy) {

      /* Jasmine tests dont run in scenarios... */
      // describe('Jasmine: sample tests', function() {
      // it('should pass', function() {
      // console.log("im in a test");
      // expect(true).toBe(true);
      // });
      //
      // it('should sum', function() {
      // $hi = seeifrequirecanbeusedtoloadadependancy(1, 2);
      // console.log(hi);
      // expect(hi).toBe(3);
      // });
      // });
      /* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
      describe(
          'my app',
          function() {

            beforeEach(function() {
              console.log("before each"
                  + seeifrequirecanbeusedtoloadadependancy(Date.now(), 3));
              console.log("Hi this variables comes from a shim: "
                  + globalVarWeDeclared);
              browser().navigateTo('app/index.html');
            });

            it(
                'should automatically redirect to /view1 when location hash/fragment is empty',
                function() {
                  expect(browser().location().url()).toBe("/view1");
                });

            describe('view1', function() {

              beforeEach(function() {
                browser().navigateTo('#/view1');
              });

              it('should render view1 when user navigates to /view1',
                  function() {
                    expect(element('[ng-view] p:first').text()).toMatch(
                        /partial for view 1/);
                  });

            });

            describe('view2', function() {

              beforeEach(function() {
                browser().navigateTo('#/view2');
              });

              it('should render view2 when user navigates to /view2',
                  function() {
                    expect(element('[ng-view] p:first').text()).toMatch(
                        /partial for view 2/);
                  });

            });
          });
    });

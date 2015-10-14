


    
    (function() {
        var app = angular.module('store', []); 
        //modules are like encapsulations of code

        app.controller('StoreController', function() {
        //controllers define behaviors and values 
            this.products = gems;
            //"product is now a property of the controller"
        });

        app.controller('PanelController', function() {
            //variable initialization
            this.tab = 1;

            //sets the tab # whenever a user clicks on the 'a' ref inside of the panel
            this.selectTab = function(setTab) {
                this.tab = setTab;
            }

            //
            this.isSelected = function(checkTab) {
                return this.tab === checkTab;
            }
        });

        var gems = [ 
        {
            name: 'Dodecahedron',
            price: 2.95,
            images: [ 
                {
                    full: 'img/pentegonal.png',
                    full_alt: 'img/pentegonal2.jpg'
                },
                {
                    
                }
            ],
            description: ' This is a badass mothertrucking stone ',
            canPurchase: true,
            soldOut: false
        }, 
        {
            name: "Pentagonal Gem",
            price: 5.95,
            images: [ 
                {
                    full: 'img/bluegem.jpg',
                    full_alt: 'img/bluegem2.jpg'
                },
                {
                    
                }
            ],
            description: " . . . ",
            canPurchase: true
        }
        ];
    })();
    //The reason why there is a () at the end here is for this function to play when the file loads. If you didn't have it load, there would be no 'app' to use with the Angular Directive
        

    


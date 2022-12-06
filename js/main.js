

  intialise();

//   $jq('#book').animate()



// $("#control").on("click", function(){

//     console.log("hello world")
    
//       });



    function intialise(){
        pannellum.viewer('panorama', {   
            "default": {
                "firstScene": "library",
                "author": "Selva",
                "sceneFadeDuration": 2000,
                "autoLoad": true
            },
            
            "scenes": {
                "library": {
                    "title": "George Peabody Library",
                    "hfov": 200,
                    "pitch": 0,
                    "yaw": 55,
                    "compass": true,
                    "northOffset": 289,
                    "type": "multires",
                    "multiRes": {
                        "basePath": "https:\/\/pannellum.org/images/multires/library",
                        "path": "/%l/%s%y_%x",
                        "fallbackPath": "/fallback/%s",
                        "extension": "jpg",
                        "tileResolution": 512,
                        "maxLevel": 6,
                        "cubeResolution": 8432
                    },
                    "hotSpots": [
                        {
                            "pitch": 60,
                            "yaw": 60,
                            "type": "info",
                            "text": "The skylight is supported by an iron truss and has a second, peaked skylight over it."
                        },
                        {
                            "pitch": 10,
                            "yaw": 25,
                            "type": "info",
                            "text": "Much of the library was constructed from cast-iron to reduce the risk of fire."
                        },
                        {
                            "pitch": -20,
                            "yaw": 10,
                            "type": "info",
                            "text": "Book a Table",
                            "id":"book_me"
                        },
                        {
                            "pitch": -3,
                            "yaw": 115,
                            "type": "info",
                            "text": "The JHU library catalog contains the Peabody Library’s holdings.",
                            
                        },
                        {
                            "pitch": -3,
                            "yaw": 65,
                            "type": "scene",
                            "text": "Gallery",
                            "sceneId": "gallery",
    
                        },
                        {
                            "pitch": 47,
                            "yaw": -135,
                            "type": "scene",
                            "text": "6th Floor",
                            "sceneId": "6th-floor"
                        }
                    ]
                },
        
                "gallery": {
                    "title": "Gallery",
                    "hfov": 100,
                    "yaw": -20,
                    "type": "multires",
                    "compass": true,
                    "northOffset": 240,
                    "multiRes": {
                        "basePath": "https:\/\/pannellum.org/images/multires/gallery",
                        "path": "/%l/%s%y_%x",
                        "fallbackPath": "/fallback/%s",
                        "extension": "jpg",
                        "tileResolution": 512,
                        "maxLevel": 5,
                        "cubeResolution": 4384
                    },
                    "hotSpots": [
                        {
                            "pitch": -7,
                            "yaw": -58,
                            "type": "scene",
                            "text": "Library",
                            "sceneId": "library",
                            "targetYaw": 240
                        }
                    ]
                },
                
                "6th-floor": {
                    "title": "6th Floor",
                    "hfov": 100,
                    "pitch": -20,
                    "yaw": -20,
                    "compass": true,
                    "northOffset": 0,
                    "type": "multires",
                    "multiRes": {
                        "basePath": "https:\/\/pannellum.org/images/multires/6th-floor",
                        "path": "/%l/%s%y_%x",
                        "fallbackPath": "/fallback/%s",
                        "extension": "jpg",
                        "tileResolution": 512,
                        "maxLevel": 4,
                        "cubeResolution": 3968
                    },
                    "hotSpots": [
                        {
                            "pitch": -47.5,
                            "yaw": -11,
                            "type": "scene",
                            "text": "Main Floor",
                            "sceneId": "library"
                        },
                        {
                            "pitch": -28,
                            "yaw": -3,
                            "type": "scene",
                            "text": "Gallery",
                            "sceneId": "gallery"
                        },
                        {
                            "pitch": -20,
                            "yaw": -165.7,
                            "type": "info",
                            "text": "The A B C of Prohibition",
                            "URL": "https://catalyst.library.jhu.edu/catalog/bib_1121184"
                        }
                    ]
                }
            }
        });
    }

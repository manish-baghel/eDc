/**
 * Created by kamal on 1/25/17.
 */
var awsConfig = require('../config/AwsConfig');
var imageConfig = require('../config/ImageUrls');
var skillTemplate = require('../templates/SkillTemplate');

module.exports = {
    getCourseDetails: getCourseDetails
};

function caffeine() {
    return {
        courseName: 'Konfinity-Caffeine',
        title0: 'caffeine',
        title1: 'Drink',
        title2: 'code',
        backgroundImage:'caffeine_bg.jpg',
        quote: 'Everyone should know how to program a computer because it teaches you how to think',
        numbers: [
            {label: "Offline Classes", value: 25},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Programming fundamentals with Java, DS and Git',
            aboutText: "To be able to build something, first you need to understand certain basic concepts of programming. " +
            "You will need these irrespective of your favorite programming language. This will give you a insight on what is" +
            " going on behind the curtains and will make you the master of code. You will learn these concepts in the context " +
            "of Java, which is widely used in industrial application software. This will give you all the tools required for" +
            " good software development. Understanding of Data Structures will give you a insight on how to make your code" +
            " run better than ever.",
            subHeading: 'Coding makes you magician having immense power and the journey begins here',
            pre: "All you need is curiosity and enthusiasm to develop programs."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to improve your cognitive and technical skill at the same time',
            skillList: [skillTemplate.getLogicalSkill(), skillTemplate.getProgrammingFundamentalsSkill(), skillTemplate.getOOpsSkill(), skillTemplate.getDataStructureSkill()]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [{
                name: "Logic Building and Programming Fundamentals",
                chapters: ['Logic Building', 'Flowcharts and Pseudo code', 'Basic Java syntax', 'Loops', 'Functions', 'Arrays', 'Pointers']
            },
                {
                    name: "Recursion, Time Complexity Analysis and Object oriented Programming",
                    chapters: ['Recursion', 'Order complexity Analysis', 'Object Oriented Programming', 'Basics of Version Control and Git']
                },
                {
                    name: 'Data Structure',
                    chapters: ['Linked Lists', 'Queues', 'Trees', 'Heaps', 'Hashtables','Sorting Algorithms', 'Graphs','Search Algo', 'Trees','Dynamic Programming']
                },
                {
                    name: 'Projects',
                    chapters:['Sudoku Game','Chess Game', 'Ludo Game']
                }
            ]
        }
    }
}


function nicotine() {
    return {
        courseName: 'Konfinity-Nicotine',
        title0: 'nicotine',
        title1: 'code',
        title2: 'REPEAT',
        backgroundImage:'nicotine_bg.png',
        quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight',
        numbers: [
            {label: "Offline Classes", value: 25},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Programming fundamentals with C++, DS and Git',
            aboutText: "To be able to build something, first you need to understand certain basic concepts of programming. " +
            "You will need these irrespective of your favorite programming language. This will give you a insight on what is " +
            "going on behind the curtains and will make you the master of code. You will learn these concepts in the context " +
            "of C++, which is widely used in industrial application software. This will give you all the tools required for " +
            "good software development. Understanding of Data Structures will give you a insight on how to make your code " +
            "run better than ever.",
            subHeading: 'Coding makes you magician having immense power and the journey begins here',
            pre: "All you need is curiosity and enthusiasm to develop programs."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to improve your cognitive and technical skill at the same time',
            skillList: [
                {
                    name: 'Logical Thinking',
                    description: 'If you can summarize your rational thoughts, you will learn to code pretty fast and be really good at it.',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
                }, {
                    name: 'Programming Fundamentals',
                    description: 'Strong programming concepts give a boost to your programming career, no matter which language you choose.',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
                }, {
                    name: 'OOPs Concepts',
                    description: 'OOPS concepts make the code bug free and easily understandable. Required in industry standard coding.',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
                }, {
                    name: 'Data Structures',
                    description: "Data Structure is how your data is stored or arranged in disk or memory. Efficient data structues improves efficiency of the programs. Thus contributing to quality code.",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
                }
            ]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [
                {
                    name: "Logic Building and Programming Fundamentals",
                    chapters: ['Logic Building', 'Flowcharts and Pseudo code', 'Basic C++ Syntax', 'Loops', 'Functions', 'Arrays', 'Pointers']
                }, {
                    name: "Recursion, Time Complexity Analysis and Object oriented Programming",
                    chapters: ['Recursion', 'Order complexity Analysis', 'Object Oriented Programming', 'Basics of Version Control and Git']
                }, {
                    name: 'Data Structure',
                    chapters: ['Linked Lists', 'Queues', 'Trees','Heaps', 'Hashtables','Sorting Algorithms', 'Graphs','Search Algo', 'Trees','Dynamic Programming']
                },
                {
                    name: 'Projects',
                    chapters:['Sudoku Game','Chess Game', 'Ludo Game']
                }
            ]
        }
    }
}

function cocaine() {  //fn name changed from morphine to cocaine
    return {
        courseName: 'Konfinity-Morphine',
        title0: 'morphine',
        backgroundImage:'morphene_bg.png',
        title1: 'pain',
        title2: 'Relieve',
        quote: 'Unix is simple. It just takes a genius to understand its simplicity',
        numbers: [
            {label: "Offline Classes", value: 25},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Backend development with Spring MVC',
            aboutText: "Any large industry today relies heavily on their server technology for scale and availability. " +
            "Spring MVC is the de facto standard of writing server code today. In this course, you will learn how multiple " +
            "clients interact with your server and what goes on in the server(and how to write that) to respond to that request. You will learn " +
            "various optimizations and other tips and tricks to look for in the code that are needed to make the server run " +
            "smoothly and quickly even under heavy workloads. So the next time your favourite website is running slow, you " +
            "will exactly know how it should have been done.",
            subHeading: 'Coding makes you magician having immense power and the journey begins here',
            pre: "You will need a understanding of Java basics to be able to enroll in this course."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to improve your cognitive and technical skill at the same time',
            skillList: [
                {
                    name: 'MVC Framework',
                    description: 'Model View Controller is the 3 layered architecture that is followed in the technical industry. This will help you write easily understandable and scalable code.',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
                }, {
                    name: 'Annotations',
                    description: 'Spring is extremely simple once you understand what annotations are and how and when to use them. Good command on annotations will make you a master of spring.',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
                }, {
                    name: 'API building',
                    description: 'Application Programming Interface is a means for clean separation of your view from the data. Following the REST architecture will help you in building better code as you can focus on minor parts one at a time.',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
                }, {
                    name: 'Website building',
                    description: "JSP is one of the view technology that can be used along with Spring to make a full fledged website completely in Java.",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
                }
            ]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [
                {
                    name: "Getting Started",
                    chapters: ['Setting Up your system', 'Maven and the command line', 'Spring hello world']
                }, {
                    name: "Basic MVC Spring",
                    chapters: ['What is MVC', 'Controllers, Services, Views , Data Access layer', 'SpEL in annotations and operators']
                }, {
                    name: 'Basic Bean Configuration',
                    chapters: ['Constructor argument', 'Annotations', 'Dependency injection', 'Bean scope', 'Bean resolution', 'Autowiring by name, type, constructor']
                }, {
                    name: 'Data Access',
                    chapters: ['Using property files', 'Configuring the database and connection pool', 'Querying the database', 'Lifecycle callbacks', 'Transactions']
                }, {
                    name: 'Spring Security',
                    chapters: ['Filters', 'Working with roles', 'Authentication and Authorization', 'Method level access control', 'Encrypting passwords']
                }
            ]
        }
    }
}


function sativa() {
    return {
        courseName: 'Konfinity-Sativa',
        title0: 'Sativa',
        backgroundImage:'sativa_bg.jpg',
        title1: 'CODE',
        title2: 'REPEAT',
        quote: ' Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
        numbers: [
            {label: "Offline Classes", value: 35},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Full Stack Web Development',
            aboutText: "A successful business requires a functional, clean and attractive website to appeal to clients and maintain their interest. Front end development of a website is crucial to this concept. The wrong type of development not only creates an unsightly appearance, but also drives away business. A website’s programming and layout needs to factor in the business purpose, branding and customer needs to fully support the company itself",
            subHeading: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            pre: "You will need a understanding of fundamentals of Programming, Consider doing Caffeine or Nicotine Course First."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to help you make beautiful and optimized website frontend',
            skillList: [
                {
                    name: 'Web Development',
                    description: 'Understanding how devices communicates with each other. Machine to Machine and Human to Machine Interaction',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
                }, {
                    name: 'Markup Languages',
                    description: 'Understanding about the markup languages for UI and UX of website. Focus will be on Semantics and clean coding',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
                }, {
                    name: "REST Api's",
                    description: "Communication between Server and Frontend is now minimalistic and that can be done only by stateless API's that is rest API",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
                }, {
                    name: 'Javascript',
                    description: "JS is most easy, versatile and notorious language. If ones mastered could be most fruitful one as it can make you a full stack developer. Focus will be on its core concepts and Best practices",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
                }
            ]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [
                {
                    name: "Introduction to Web",
                    chapters: ['Client Side','Server Side','HTTP and DNS','Languages of Web','Setting Up your system', 'NodeJs and Bower and NPM packages', 'Developer Console']
                }, {
                    name: "HTML",
                    chapters: ['Why only HTML', 'HTML Documents','HTML and Browser', 'HTML Semantics']
                }, {
                    name: 'CSS',
                    chapters: ['CSS Basics', 'Inheritance and Cascading in CSS', 'Media Queries', 'RWD ( Responsive Web Design ) Process', 'RWD Mobile First Approach', 'RWD fluid and Adaptive Approach',"After this module you'll be able to make a responsive Static Website"]
                }, {
                    name: 'Javascript and Jquery',
                    chapters: ['Intro', 'This and Object', 'Scope and Modules', 'Types and Grammer', 'ES6 and Beyond','Jquery']
                }, {
                    name: 'Practical HTML5',
                    chapters: ['Video and Audio Elements', 'Geolocation', 'Libraries', 'Handling forms and AJAX']
                },
                {
                    name: 'Projects',
                    chapters: ['Simple Ecommerce Website', '', 'Libraries', 'Handling forms and AJAX']
                },
                {
                    name: 'Internship',
                    chapters: ['Stipend based internship if passed the course']
                }
            ]
        }
    }
}

function lsd() {
    return {
        courseName: 'Konfinity-LSD',
        title0: 'lsd',
        backgroundImage:'lsd_bg.jpg',
        title1: 'Steve',
        title2: 'jobs',
        quote: "It's not at all important to get it right the first time. It's vitally important to get it right the last time",
        numbers: [
            {label: "Offline Classes", value: 35},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Frontend Development With Angular2',
            aboutText: "A successful business requires a functional, clean and attractive website to appeal to clients and maintain their interest. Front end development of a website is crucial to this concept. The wrong type of development not only creates an unsightly appearance, but also drives away business. A website’s programming and layout needs to factor in the business purpose, branding and customer needs to fully support the company itself",
            subHeading: ' First, solve the problem. Then, write the code',
            pre: "You will need a understanding of fundamentals of Programming, and a lot of Javascript. Consider doing Caffeine or Nicotine then sativa course first."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to help you make beautiful and optimized website frontend',
            skillList: [
                {
                    name: 'Web Development',
                    description: 'Understanding how devices communicates with each other. Machine to Machine and Human to Machine Interaction',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
                }, {
                    name: 'Web Frameworks',
                    description: 'Using a web framework over Javascript is beneficial to start quickly and efficiently. It helps in clear separation of Concern and Code Modularity. Focus will be on Clean and efficient coding',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
                }, {
                    name: "REST Api's",
                    description: "Communication between Server and Frontend is now minimalistic and that can be done only by stateless API's that is rest API",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
                }, {
                    name: 'Angular2',
                    description: "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
                }
            ]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [
               {
                    name: "Fast Track Languages of Web",
                    chapters: ['HTML','CSS', 'Responsive Web Development Process','Javascript','Jquery']
                }, {
                    name: 'Angular 1.5',
                    chapters: ['Introduction to Angular', 'Angular Controller and Markup', 'Creating and Using Angular Services','Angular Routing', 'Custom Angular Directives', 'Testing Angular']
                }, {
                    name: 'Building Components With Angular 1.5',
                    chapters: ['Introduction of Components','Programming Components','Routing with Components','Composition with Components']
                }, {
                    name: 'Building Realtime Angular Controls',
                    chapters: ['Introduction to realtime Components','Building a Realtime Gauge Control','Building a Gauge Widget','Realtime Line and Stock Charts','Building a Security Monitor Control','Realtime GPS Tracking','Accessing a Realtime Twitter Feed']
                },
                {
                    name: 'Angular2',
                    chapters: ['Intro to Angular2','Templates, Interpolation and Directives','Data Binding and Pipes','More on Components','Building Nested Components','Services and Dependency Injection','Retrieving Data Using HTTP','Navigation and Routing','Angular Modules']
                },
                {
                    name:'Working with Angular2 Animations',
                    chapters:['Animation Introduction','States and Transition','Wildcard and Void States','Animation Timing','Multi-Step Animations','Animation Callbacks','Calling Multiple Animations','Animation on Input Focus','Animation on Item Submission','Animation on Deleting Items','Animating the Router Outlet Components']
                },
                {
                    name: 'Hybrid Application Development On Ionic',
                    chapters:['Gettting Started with IONIC 2','Navigation','Working with HTTP and Lifecycle Events','IONIC 2 Components','Ionic Native','Customizing IONIC 2']
                },
                {
                  name:'Projects',
                    chapters:['Service Selection Website like UrbanClap','Friend Location Finder Website','Community Learning Website']
                },
                {
                    name: 'Internship',
                    chapters: ['Stipend based internship if passed the course']
                }
            ]
        }
    }
}

function shrooms() {
    return {
        courseName: 'Konfinity-Shrooms',
        title0: 'Shrooms',
        backgroundImage:'shrooms_bg.png',
        title1: 'CODE',
        title2: 'Magic',
        quote: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time",
        numbers: [
            {label: "Offline Classes", value: 45},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Backend Development with NodeJS',
            aboutText: "The backend of a web application is an enabler for a frontend experience. An application’s frontend may be the most beautifully crafted web page, but if the application itself doesn’t work, the application will be a failure. The backend of an application is responsible for things like calculations, business logic, database interactions, and performance. Most of the code that is required to make an application work will be done on the backend.",
            subHeading: 'Programming can be fun, so can cryptography; however they should not be combined',
            pre: "You will need a understanding of fundamentals of Programming, and a lot of Javascript. Consider doing Caffeine or Nicotine then sativa course first."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to help you make beautiful and optimized website frontend',
            skillList: [
                {
                    name: 'Web Development',
                    description: 'Understanding how devices communicates with each other. Machine to Machine and Human to Machine Interaction',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
                }, {
                    name: 'Web Frameworks',
                    description: 'Using a web framework over Javascript is beneficial to start quickly and efficiently. It helps in clear separation of Concern and Code Modularity. Focus will be on Clean and efficient coding',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
                }, {
                    name: "REST Api's",
                    description: "Communication between Server and Frontend is now minimalistic and that can be done only by stateless API's that is rest API",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
                }, {
                    name: 'NodeJS',
                    description: "Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
                }
            ]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [
                {
                    name: 'Web Development Basics',
                    chapters:['Client Side','Server Side','HTTP and DNS']
                },
                {
                    name: "Fast Track Languages of Web",
                    chapters: ['HTML','CSS', 'Responsive Web Development Process','Javascript','Jquery']
                }, {
                    name: 'Async Javascript',
                    chapters: ['Introduction to Async','Callbacks','Promises','Generators','Program Performance','Benchmarking And Tuning','Asynchronous Library','Advance Async Pattern']
                }, {
                    name: 'Introduction to NodeJs',
                    chapters: ['System Setup',"Node's Event Loop","Node Convention of Writing Asnc code",'The Tree Problem','require() and NPM','Events and Stream','Piping between Streams','Accessing the LOCAL System','Interacting with the web','Realtime Interaction with SOCKET IO','Testing and Debugging','Scaling Up Node Application']
                }, {
                    name: 'Express',
                    chapters: ['Express Intro','Setting up Express','Gulp Intro','Setting Up Gulp','Templating Engines','Routing','Database Interaction','Authentication','Structure and 3rd Party Apps']
                },
                {
                    name: 'Securing Your NodeJS App',
                    chapters: ['Intro to Hackers-hall','User Authentication','Session Management','Securing MongoDb from injecting attacks','Handling Untrusted Data','Access Control','Defending against Cross site scripting','Securing your connection']
                },
                {
                    name:'Real time web with NodeJS',
                    chapters:["HTML5 Api's",'Socket.io','WebRTC']
                },
                {
                    name: 'NodeJS testing Strategy',
                    chapters:['Simple Test with MOCHA','Data access Considerations',"External API's"]
                },
                {
                    name: 'Using ES6 In your node application',
                    chapters:['ECMAScript and NodeJs','Some syntactic sugar','New Bindings','Functional Changes','Build-ins']
                },
                {
                    name: 'NodeJS and Internet of Things INTEL Edition ( Optional module with hardware required ) ',
                    chapters:['Introduction to IoT','Microcontrollers','SOC','Sensors and Screen','Communications','Setting up INTEL edition','Writing and deploying JS','Using a module for easy Device Control','Working with connected Devices']
                },
                {
                    name:'Projects',
                    chapters:['Service Selection Website like UrbanClap','Anonymous Chat app for Campus','Community Learning Website']
                },
                {
                    name: 'Internship',
                    chapters: ['Stipend based internship if passed the course']
                }
            ]
        }
    }
}

function morphine() {  //fn name changed from cocaine to morphine
    return {
        courseName: 'Konfinity-Morphine',
        title0: 'Morphine',
        backgroundImage:'cocaine_bg.png',
        title1: 'narcos',
        title2: 'Netflix',
        quote: "When someone says, -I want a programming language in which I need only say what I want done-,-give him a lollipop-",
        numbers: [
            {label: "Offline Classes", value: 45},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Advance Mobile Development with Android',
            aboutText: "In the past few years mobile app development has become a booming industry. Currently, it is estimated that there are 2.3 million mobile app developers who are devoted to keeping up with the industry demand.In fact, according to Apple, in 2013 1.25 million apps were registered in the Apple app store and accounted for 50 billion downloads and $5 billion paid to developers.With these types of industry numbers, it soon becomes clear that mobile app development is a key factor for business success",
            subHeading: "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else",
            pre: "You will need a understanding of fundamentals of Programming, and little Java. Consider doing Caffeine course first."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to help you make beautiful and optimized website frontend',
            skillList: [
                {
                    name: 'Mobile Development',
                    description: 'Understanding how mobile ecosystem works. Mobile development is bit complex as resources on a mobile device are very limited. Performance and optimization is the key for mobile development. Focus will be on Various aspects of Mobile Development',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
                }, {
                    name: 'Java',
                    description: 'This Course will contain Java required for Android Development that is of basic level with little bit advance knowledge',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
                }, {
                    name: "REST Api's",
                    description: "Communication between Server and Frontend is now minimalistic and that can be done only by stateless API's that is rest API",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
                }, {
                    name: 'Real Time Applications',
                    description: "Real time Mobile Application is hot as hell these days. The world is running on mobile and people want instant data on their phones. Course will focus on Scalable mobile solution for Real time Problem",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
                }
            ]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [
                {
                    name: 'Mobile Development Basics',
                    chapters:['Intro to Mobile World','Architecture of a Mobile Device','Introduction to Complete App Ecosystem']
                },
                {
                    name: "Just Enough Java",
                    chapters: ['Classes Objects and Methods','Interfaces','Conditional Statements','Data Structure in Java','Constants','Overrides in Java']
                }, {
                    name: 'Android Development Basics',
                    chapters: ['Setting up System','Android Studio Introduction','Hello world']
                }, {
                    name: 'Android Activities',
                    chapters: ['Introduction to Activities and Android Components','Using activities to listen to events','Sharing Data between activities and Explicit Intent','Exploring Activity LifeCycle']
                }, {
                    name: 'Android Fragments',
                    chapters: ['Introduction to Fragments','Adding Fragment to activity','Exploring Fragment LifeCycle','Playing around with Fragment Transaction','Sending Data to Fragment from parent Activity','Understanding Communication flow from Fragment to activity','Understanding Inter fragment Communication','Enabling back button with backstack','Providing stability to fragment on screen rotation']
                },
                {
                    name: 'Broadcast Receivers',
                    chapters: ['Intro to Broadcast Receivers','Creating Broadcast Receiver statically','Creating it dynamically','Understanding sticky broadcast','Enhancing app security with broadcast receiver']
                },
                {
                    name:'Styles and Themes',
                    chapters:["Styling Views",'Using Inheritance','Applying Themes','Maintaining backward compatibility']
                },
                {
                    name: 'Android Material Design',
                    chapters:['Intro to Material Design','Adding a Toolbar','Recycler and Card Views','Navigation Drawer','Material Animation']
                },
                {
                    name: 'Animation on Android',
                    chapters:['View Animation','Animation Sets and Interpolators','Property Animation','Some Practice']
                },
                {
                    name: 'Data Binding',
                    chapters:['Simple Data Binding','Custom and Dynamic Binding','Observables','Pitfalls and ProTips']
                },
                {
                    name: 'Processes and Threads',
                    chapters:['Application Process Model',"Sharing User ID's and Processes","Threads and Thread Options"]
                },
                {
                    name:'Performance Management',
                    chapters:['Analysing and Understanding Memory','Memory Leaks','Sharpen Network Uses','Optimizing UI','Detecting and Refining Battery Draining Features']
                },
                {
                    name:'Augment Reality on Android (Extra Module)',
                    chapters:['AR fundamentals and Setup','AR Building Blocks','AR with qualcomm vuforia SDK','AR with Metaio SDK','Sensor based AR','AR User Interactions','Advance topics and future']
                },
                {
                    name:'Projects',
                    chapters:['Service Selection APP like UrbanClap','Anonymous Chat app for Campus','UBER like ride booking app']
                },
                {
                    name: 'Internship',
                    chapters: ['Stipend based internship if passed the course']
                }
            ]
        }
    }
}

function crystal() {
    return {
        courseName: 'Konfinity-Crystal',
        title0: 'Crystal',
        backgroundImage:'crystal_bg.jpg',
        title1: 'Breaking',
        title2: 'Bad',
        quote: "Without requirements or design, programming is the art of adding bugs to an empty text file",
        numbers: [
            {label: "Offline Classes", value: 25},
            {label: "Online Classes", value: 5},
            {label: "Problems", value: 200},
            {label: "Live Projects", value: 2}
        ],
        about: {
            name: 'Linux, Dev-ops with Amazon Web Services',
            aboutText: "DevOps is a culture rather than a specific technique or technology. It aims to develop a collaborative working relationship and foster adoption of a common set of objectives to deliver IT services that provide value to the business. DevOps is strongly associated with a set of techniques collectively known as Continuous Delivery, which is a synthesis of concepts from lean production, continuous integration and continuous deployment",
            subHeading: "There is not now, nor has there ever been, nor will there ever be, any programming language in which it is the least bit difficult to write bad code",
            pre: "You will need no prior knowledge of Programming."
        },
        output: {
            name: 'What you will learn',
            subHeading: 'Course is designed to make you understand the complete ecosystem of applications',
            skillList: [
                {
                    name: 'Operating System',
                    description: 'Understanding how operating system manages the processes and applications. Various functionalites of operating system',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill1
                }, {
                    name: 'Linux',
                    description: 'If you’re a system administrator, working with Linux is a dream come true. No more daily babysitting servers. In fact, Linux is as close to “set it and forget it” as you will ever find. And, on the off chance, one service on the server requires restarting, re-configuring, upgrading, etc...most likely the rest of the server won’t be affected',
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill2
                }, {
                    name: "AWS",
                    description: "AWS is designed to allow application providers, ISVs, and vendors to quickly and securely host your applications – whether an existing application or a new SaaS-based application. You can use the AWS Management Console or well-documented web services APIs to access AWS’s application hosting platform",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill3
                }, {
                    name: 'Hosting',
                    description: "A web hosting service is a type of Internet hosting service that allows individuals and organizations to make their website accessible via the World Wide Web",
                    logo: awsConfig.getImagePrefix() + "/" + imageConfig.getUrls().skill4
                }
            ]
        },
        structure: {
            name: "Curriculum",
            subHeading: "Course designed to Learn with less effort and more output",
            courseStructure: [
                {
                    name: 'Dev-Ops',
                    chapters:['Intro to Devops','Tasks of Devops Engineer','How big is opportunity','Operating System']
                },
                {
                    name: "Linux System Administration Fundamentals",
                    chapters: ['Intro','Customizing the Linux Usser Shell','Customize and Write Simple Shell Script','Managing an X11 environment in Linux','Managing Users and Groups','Automate System Tasks','Configuring the Linux Locale']
                }, {
                    name: 'Linux Essentials',
                    chapters: ['Introducing the Linux Foundation','Working at the command line','Reading Files','Using vim text editor','Piping and Redirection','Archiving Files','Understanding File Permissions',' Accessing Root Accounts','Accessing Servers with SSh','Using Screen and Script']
                }, {
                    name: 'Linux Networking',
                    chapters: ['Introduction to Linux Networking','Configuring Hostnames','Configuring NTP','Routing with Ubuntu','Firewalling and Firevalid','Using iptables','Methods to tunnel traffic','Monitoring the network']
                }, {
                    name: 'Linux Encryption Security',
                    chapters: ['Introduction to Encryption','Open SSL certificates and website Encryption','Website Authentication','Encrypting the Data on your mobile devices','Encryption and DNS']
                },
                {
                    name: 'Linux Network Programming',
                    chapters: ['Setting up','Writing TCP-based Servers','Writing TCP-based Clients','Writing UDP-based Server and Clients','Concurrent Servers and Clients','Multi-threaded Concurrency']
                },
                {
                    name:'AWS',
                    chapters:['Introduction to AWS','Managing AWS Solutions','Using AWS compute Services','Leveraging AWS Storage Services','Working with AWS Databases','Using AWS messaging Service']
                }
            ]
        }
    }
}



function getCourseDetails(courseName) {

    switch (courseName) {

        case 'caffeine':
            return caffeine();
            break;
        case 'nicotine':
            return nicotine();
            break;
        case 'morphine':
            return morphine();
            break;
        case 'sativa':
            return sativa();
            break;
        case 'lsd':
            return lsd();
            break;
        case 'shrooms':
            return shrooms();
            break;
        case 'cocaine':
            return cocaine();
            break;
        case 'crystal':
            return crystal();
            break;
        case 'default':
            return undefined;
            break;
    }
}

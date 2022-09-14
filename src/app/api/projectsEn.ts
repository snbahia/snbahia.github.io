export const projectsEn = [
    {
        id:"teamTraveler",
        name: "Swarm Robotics Thesis",
        technologies: 'MATLAB, Python',
        images: [
            {
                title:'3D plot of simulation results',
                src: "assets/images/swarm_graph.png",
            },
            {
                title:'Box plot',
                src:"assets/images/box_plot.png",
            },
        ],
        url: "assets/images/thesis_paper.pdf",
        detail:"<p><a href=\"assets/images/swarm_vid.mp4\"> View a swarm simulation video by clicking here. </a>A research project pertaining to collective mapping in a dynamic environment, involving the development and execution of test simulations in Python coding. Created a new response metric to help track and eventually optimize the performance of swarm mapping.</p>",
        codeSourceUrl:'assets/images/thesis_paper.pdf',
        detailIsDisplayed: false,
    },
    {
        id:"mautic",
        name: "Webots Autonomous Intersection Crossing",
        technologies: 'Webots 3D Robot Simulator, Python',
        images: [
            {
                title:'Tinkerbot used with sensors attached',
                src:   "assets/robot.png",
            },
            {
                title:'The environment was designed to mimic a 3-way intersection',
                src:   "assets/arena.png",
            },
            
            
        ],
        url:'assets/images/situation5.mp4',
        detail:"<p><a href=\"assets/images/situation4.mp4\"> View video of the simulation here. </a> Used Webots robot simulator to create an autonomous intersection crossing strategy without any full stops or crashes.</p> <p> The robots transmit and receive packets of GPS data once robots enter radius around intersection. The robots have lane detection and the strategy is implemented using a decentralized approach.</p>",
        codeSourceUrl:'',
        detailIsDisplayed: false,
    },
    {
        id:"pokedex",
        name: "Deep Sea Decontamination CAD Project",
        technologies: 'SolidWorks, MATLAB',
        images: [
            {
                title:'Full CAD design render',
                src:   "assets/fullRender.png",
            },
            {
                title:'Pump assembly render',
                src :"assets/Pump Assy.JPG",
            },
            {
                title:"Cross section view render of the pump",
                src: "assets/Pump X-Section.JPG",
            },  
            {
                title:"Sand separator render",
                src: "assets/Separator Gear Train Assy.JPG",
            },  
            {
                title:"Cross section view render of the separator",
                src: "assets/X-Section Separator Gear Train Assy.JPG",
            },            
        ],
        url:'assets/shaftAssemblyAnimation.mp4',
        detail:"<p><a href=\"assets/shaftAssemblyAnimation.mp4\"> View video of the pump assembly animation. </a> Designed a crane attachment which removes barrels of pesticide from the ocean floor. My role was to design the suction system which includes the pump and a sand separator along with the piping, gearbox, etc.</p> <p> The design was parametrized using MATLAB code so it can be resized given a few input specifications. A detailed failure analysis was performed on all the vital components. </p>",
        codeSourceUrl:'https://github.com/ifi-2019/trainer-ui-zinedineBenkhider',
        detailIsDisplayed: false,
    },
];


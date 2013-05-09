$.enums = {
    cacheGroups: {
        nearYou: 0,
        recommended: 1
    },

    difficulty: {
        easy: { id: 0, name: "easy" },
        normal: {id: 1, name: "normal" },
        hard: { id: 2, name: "hard" }
    },
    
    eventCategories: {
        appliedByMe: 0,
        appliedByOthers: 1
    }
}

// Create namespace for our application state
$.applicationState = {
    // The name of the user
    userName: "John Doe",
    
    // The current geocache that a user has selected. Defaults to null since a user doesn't initially have one selected.
    selectedGeocache: null,

    // The current geocaching reservation that a user has selected. Defaults to null since a user doesn't initially have one selected.
    selectedGCReservation: null,
    
     // The current regular reservation that a user has selected. Defaults to null since a user doesn't initially have one selected.
    selectedRegReservation: null,

    // Filters related to what caches should be displayed
    settings: {
        easy: false,
        normal: true,
        hard: true
    },

    // A few collections of our mocked up geocache locations
    allGeocaches: [
        { id: 1, lat: 45.478652, lon: -92.754652, name: "My First GeoCache", group: $.enums.cacheGroups.nearYou, lastFound: new Date(2012, 11, 15, 5, 0, 0, 0), difficulty: $.enums.difficulty.easy, foundBy: [{ name: "John D." }, { name: "Ellen M." }, { name: "Mike E." }], hints: [{ name: "Make sure to look closely at all the leaves."} ] },
        { id: 2, lat: 45.578652, lon: -92.654652, name: "By the pond", group: $.enums.cacheGroups.nearYou, lastFound: new Date(2013, 3, 3, 12, 0, 0, 0), difficulty: $.enums.difficulty.normal, foundBy: [{ name: "John D." }], hints: [{ name: "This one should probably be a tiny size instead of a small. I was not looking close enough at first." }] },
        { id: 3, lat: 45.678652, lon: -93.354652, name: "Near the forrest", group: $.enums.cacheGroups.nearYou, lastFound: new Date(2012, 11, 15, 5, 0, 0, 0), difficulty: $.enums.difficulty.hard, foundBy: [{ name: "Zach Q." }, { name: "Ellorie L." }, { name: "Josh J." }, { name: "Quinton T." }], hints: [{ name: "Look near the trees, but NOT in them." }] },
        { id: 4, lat: 44.778652, lon: -93.254652, name: "Through the woods", group: $.enums.cacheGroups.nearYou, lastFound: new Date(2012, 10, 23, 5, 0, 0, 0), difficulty: $.enums.difficulty.hard, foundBy: [{ name: "Ellen M." }, { name: "Mike E." }], hints: [{ name: "Going with someone tall makes this one much easier." }] },
        { id: 5, lat: 44.878652, lon: -93.154652, name: "Prairy day", group: $.enums.cacheGroups.recommended, lastFound: new Date(2013, 3, 6, 20, 0, 0, 0), difficulty: $.enums.difficulty.easy, foundBy: [{ name: "Mike E." }], hints: [{ name: "Think wet... Very wet..." }] },
        { id: 6, lat: 44.955, lon: -93.2, name: "Twins Stadium", group: $.enums.cacheGroups.recommended, lastFound: new Date(2013, 2, 17, 5, 0, 0, 0), difficulty: $.enums.difficulty.easy, foundBy: [{ name: "Tony S." }, { name: "Logan W." }], hints: [{ name: "Don't look for this one just before a game. You end up getting a lot of funny looks." }, { name: "I kept looking right next to the statue, but that is not where it is." }] }
    ],


    // A few collections of our mocked up gcReservations
    allGCReservations: [
        { id: 1, organizer: "John Doe", group: $.enums.eventCategories.appliedByMe, cachingDate: new Date(2013, 6, 6, 8, 0, 0, 0), difficulty: $.enums.difficulty.hard, equipmentsSupport: [{ name: "Magellan CX0310SGXNA eXplorist 310 Waterproof Hiking GPS" }, { name: "Cache Advance Magnetic Bolt" }, { name: "Garmin nüvi 1300T GPS Navigation System" }], foodSupport: [{ name: "Cookies"},{ name: "Bread"},{ name: "AppleJuice"} ], contact: "6122345612" },
        { id: 2, organizer: "John Doe", group: $.enums.eventCategories.appliedByMe, cachingDate: new Date(2013, 7, 1, 12, 0, 0, 0), difficulty: $.enums.difficulty.normal, equipmentsSupport: [{ name: "Garmin nüvi 1300T GPS Navigation System" }], foodSupport: [{ name: "OrangeJuice" },{ name: "ChickenWings" }], contact: "6122345612" },
        { id: 3, organizer: "John Doe", group: $.enums.eventCategories.appliedByMe, cachingDate: new Date(2013, 5, 31, 9, 0, 0, 0), difficulty: $.enums.difficulty.hard, equipmentsSupport: [{ name: "Cache Advance Magnetic Bolt" }, { name: "Cache Advance Magnetic Vehicle Travel Bug" }, { name: "Lowrance Endura Outback Gps" }], foodSupport: [{ name: "AppleJuice" },{ name: "Sandwich" }] , contact: "6122345612"},
        { id: 4, organizer: "Divid", group: $.enums.eventCategories.appliedByOthers, cachingDate: new Date(2013, 10, 19, 10, 0, 0, 0), difficulty: $.enums.difficulty.easy, equipmentsSupport: [{ name: "Lowrance Endura Outback Gps" }], foodSupport: [{ name: "OrangeJuice" }], contact: "2119087761" },
        { id: 5, organizer: "Jessica", group: $.enums.eventCategories.appliedByOthers, cachingDate: new Date(2013, 5, 22, 14, 0, 0, 0), difficulty: $.enums.difficulty.easy, equipmentsSupport: [{ name: "Cache Angel Geocoin - The Seeker - Antique Silver" }], foodSupport: [{ name: "Sandwich" }, { name: "Cookies" }] , contact: "803712467"}
    ],

    // A few collections of our mocked up regReservations
    allRegReservations: [
        { id: 1, organizer: "John Doe", group: $.enums.eventCategories.appliedByMe, date: new Date(2013, 6, 1, 8, 0, 0, 0), locating: "Wilson Park, Philadelphia, PA", theme: "public lecture", contact: "6122345612" },
        { id: 2, organizer: "John Doe", group: $.enums.eventCategories.appliedByMe, date: new Date(2013, 6, 8, 10, 0, 0, 0), locating: "El Taller Del Alfarero Center, 14521 South Normandie AvenueGardena, CA", theme: "happy weekend dinner", contact: "6122345612" },
        { id: 3, organizer: "John Doe", group: $.enums.eventCategories.appliedByMe, date: new Date(2013, 7, 1, 10, 0, 0, 0), locating: "Chianti Grill, 2050 N Snelling Ave, Roseville, MN", theme: "annual geocaching meeting for local group", contact: "6122345612"},
        { id: 4, organizer: "Divid", group: $.enums.eventCategories.appliedByOthers, date: new Date(2013, 7, 2, 9, 30, 0, 0), locating: "New York University, 44 W 4th St(between Greene St & Mercer St) New York, NY ", theme: "national geocaching knowledge competition", contact: "2119087761" },
        { id: 5, organizer: "Jessica", group: $.enums.eventCategories.appliedByOthers, date: new Date(2013, 5, 22, 14, 30, 0, 0), locating: "The Original Valentino's, 33497 S Dixie Hwy Unit 105 Florida City, FL  ", theme: "local flee market activity for geocaching device ", contact: "803712467"}
    ],


    init: function () {
        // Set the user-name for the current user
        $("#user-name").text($.applicationState.userName);

        //Allen changed live() method to on() method to stick to jQuery's recommendation 
        $('#user-settings').live('pageinit', function (event) {
            $.applicationState.initUserSettings();
        });
        
        $('#user-reservations').live('pageinit', function (event) {
            $.applicationState.initUserReservations();
        });

        $('#gcReservation-detail').live('pageinit', function (event) {
            $.applicationState.initGCReservationDetail();
        });
        
        $('#regReservation-detail').live('pageinit', function (event) {
            $.applicationState.initRegReservationDetail();
        });

        $('#sponsored-equipments').live('pageinit', function (event) {
            $.applicationState.initSpEquipments();
        });

        $('#sponsored-food').live('pageinit', function (event) {
            $.applicationState.initSpFood();
        });

        $('#caches').live('pageinit', function (event) {
            $.applicationState.initCaches();
        });

        $('#cache-detail').live('pageinit', function (event) {
            $.applicationState.initCacheDetail();
        });

        $('#found-by').live('pageinit', function (event) {
            $.applicationState.initFoundBy();
        });

        $('#hints').live('pageinit', function (event) {
            $.applicationState.initHints();
        });

        $('#report-problem').live('pageinit', function (event) {
            $.applicationState.initReportProblem();
        });

        $('#gps-data').live('pageinit', function (event) {
            $.applicationState.initGpsData();
        });
    },

    // Initializes the user-settings.html page.
    // TODO: This is not quite working yet...
    initUserSettings: function () {
        var selectedValue;
        if ($.applicationState.settings.normal) {
            selectedValue = "on";
        }
        else {
            selectedValue = "off";
        }

        //$("#selectID").val(theValue).prop('selected', true);
        //$("#toggle-switch-normal").val(selectedValue).prop('selected', true);
        $("#toggle-switch-normal").slider('enable');
        $("#toggle-switch-normal").slider('refresh');

        // Set the user-name for the current user
        //$("#user-name").text($.applicationState.);
    },

    // Initialize the user-resverations.html page
    initUserReservations: function () {
       
            // Add all reservations to the list view in their appropriate section
        this.addSectionHeader($("#gcReservations-collection"), "GeoCaching 101 Events");
        this.addSelectableItems2($("#gcReservations-collection"), $.applicationState.allGCReservations);
        this.addSectionHeader($("#regReservations-collection"), "Applied by Others");
        this.addSelectableItems3($("#regReservations-collection"), $.applicationState.allRegReservations);

        // Attach an event listener to each item in the collection
        $('#gcReservations-collection li').on('click', function () {
            var id = $("a", this).attr("gcRes-id");
            if (id) {
                var idInt = parseInt(id);
                var item = $.grep($.applicationState.allReservations, function (item, index) { return item.id == idInt; })[0];
                $.applicationState.selectedGCReservation= item;
            }
        });
        
        // Attach an event listener to each item in the collection
        $('#regReservations-collection li').on('click', function () {
            var id = $("a", this).attr("regRes-id");
            if (id) {
                var idInt = parseInt(id);
                var item = $.grep($.applicationState.allReservations, function (item, index) { return item.id == idInt; })[0];
                $.applicationState.selectedRegReservation= item;
            }
        });
    },

    // Initializes the gcReservation-detail.html page
    initGCReservationDetail: function () {
        $("#organizer-name").text(this.selectedGCReservation.organizer);
        $("#caching-date").text(this.formatDate($.applicationState.selectedGCReservation.cachingDate));
        $("#difficulty").text(this.selectedGCReservation.difficulty.name);
        $("#sponsored-equipments-count").text(this.selectedGCReservation.equipmentsSupport.length);
        $("#sponsored-food-count").text(this.selectedGCReservation.foodSupport.length);
        $("#contact-info").text(this.selectedGCReservation.contact);
    },
    
    // Initializes the regReservation-detail.html page
    initRegReservationDetail: function () {
        $("#organizer-name").text(this.selectedRegReservation.organizer);
        $("#date").text(this.formatDate($.applicationState.selectedRegReservation.date));
        $("#location").text(this.selectedRegReservation.locating);
        $("#theme").text(this.selectedRegReservation.theme);
        $("#contact-info").text(this.selectedRegReservation.contact);
    },

    initSpEquipments: function () {
        $("#back-button-text").text("Event by " + this.selectedGCReservation.organizer);
        this.addItems($("#sponsored-equipments-list"), this.selectedGCReservation.equipmentsSupport);
    },

    initSpFood: function () {
        $("#back-button-text").text("Event by " + this.selectedGCReservation.organizer);
        this.addItems($("#sponsored-food-list"), this.selectedGCReservation.foodSupport)
    },

    // Initializes the caches.html page
    initCaches: function () {
        // Add all geocaches to the list view in their appropriate section
        this.addSectionHeader($("#caches-collection"), "Near You");
        this.addSelectableItems($("#caches-collection"), $.grep($.applicationState.allGeocaches, function (item) { return item.group == 0 }));
        this.addSectionHeader($("#caches-collection"), "Recommended for you");
        this.addSelectableItems($("#caches-collection"), $.grep($.applicationState.allGeocaches, function (item) { return item.group == 1 }));

        // Attach an event listener to each item in the collection
        $('#caches-collection li').on('click', function () {
            var id = $("a", this).attr("geo-id");
            if (id) {
                var idInt = parseInt(id);
                var item = $.grep($.applicationState.allGeocaches, function (item, index) { return item.id == idInt; })[0];
                $.applicationState.selectedGeocache = item;
            }
        });
    },

    // Initializes the cache-detail.html page
    initCacheDetail: function () {
        $("#cache-name").text(this.selectedGeocache.name);
        $("#last-found").text(this.formatDate($.applicationState.selectedGeocache.lastFound));
        $("#difficulty").text(this.selectedGeocache.difficulty.name);
        $("#found-by-count").text(this.selectedGeocache.foundBy.length);
        $("#hints-count").text(this.selectedGeocache.hints.length);

        var coordinates = this.selectedGeocache.lat + ',' + this.selectedGeocache.lon;
        $("#static-map").html('<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + coordinates + '&amp;zoom=13&amp;size=288x200&amp;markers=' + coordinates + '&amp;sensor=false" width="288" height="200">');
    },

    initFoundBy: function () {
        this.addItems($("#found-by-collection"), this.selectedGeocache.foundBy);
        $("#back-button-text").text(this.selectedGeocache.name);
    },

    initHints: function () {
        $("#back-button-text").text(this.selectedGeocache.name);
        this.addItems($("#hints-collection"), this.selectedGeocache.hints);

        $("#add-hint-button").click(function () {
            var inputText = $("#add-hint-text-area").val();
            $("#add-hint-text-area").val("");
            $.applicationState.selectedGeocache.hints.push({ name: inputText });

            // Refresh the list view
            $.applicationState.addItems($("#hints-collection"), $.applicationState.selectedGeocache.hints);
        });
    },

    initReportProblem: function () {
        $("#back-button-text").text(this.selectedGeocache.name);
    },

    initGpsData: function () {
        $("#target-lat").text(this.selectedGeocache.lat);
        $("#target-lon").text(this.selectedGeocache.lon);

        this.startTrackPosition();
    },

    // Adds a section header to a list view.
    addSectionHeader: function (collectionView, headerText) {
        var template = '<li data-role="list-divider" role="heading">' + headerText + '</li>';
        collectionView.append(template);
    },

    // Adds a collection of items to a list view(caching list). These items are selectable.
    addSelectableItems: function (collectionView, items) {
        $.each(items, function (index, item) {
            var template = '<li data-theme="c"><a href="cache-detail.html" data-transition="slide" geo-id=' + item.id + '>' + item.name + '</a></li>';
            collectionView.append(template).listview('refresh');
        });
    },


    // Adds a collection of items to a list view(gcReservation list). These items are selectable.
    addSelectableItems2: function (collectionView, items) {
        $.each(items, function (index, item) {
            var template = '<li data-theme="c"><a href="gcReservation-detail.html" data-transition="slide" res-id=' + item.id + '>' + item.organizer+ '</a></li>';
            collectionView.append(template).listview('refresh');
        });
    },
    
    // Adds a collection of items to a list view(regReservation list). These items are selectable.
    addSelectableItems3: function (collectionView, items) {
        $.each(items, function (index, item) {
            var template = '<li data-theme="c"><a href="regReservation-detail.html" data-transition="slide" res-id=' + item.id + '>' + item.organizer+ '</a></li>';
            collectionView.append(template).listview('refresh');
        });
    },

    // Adds a collection of items to a list view. These items are NOT selectable.
    addItems: function (collectionView, items) {
        // Clear out any existing child nodes.
        collectionView.empty();

        // Add each item as a child node of the collection view.
        $.each(items, function (index, item) {
            var template = '<li data-theme="c">' + item.name + '</li>';
            collectionView.append(template).listview('refresh');
        });
    },

    // Applys a display format to a date object
    formatDate: function (date) {
        return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear();
    },

    // Begins tracking a user's geo-location.
    startTrackPosition: function () {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function (position) {
                // Update the user's position
                $("#current-lat").text(position.coords.latitude);
                $("#current-lon").text(position.coords.longitude);

                // Update the distance between the user's current position and the geocache
                $("#distance").text(position.coords.latitude, position.coords.longitude, $.applicationState.selectedGeocache.lat, $.applicationState.selectedGeocache.lon)
            });
        }
        else {
            alert("Geolocation is not supported by this browser!");
        }
    },

    // Finds the distance between two geo-coordinate positions.
    distanceBetweenCoordinates: function (lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = (lat2 - lat1).toRad();
        var dLon = (lon2 - lon1).toRad();
        var lat1 = lat1.toRad();
        var lat2 = lat2.toRad();

        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
    }
}

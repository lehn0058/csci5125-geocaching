// Create namespace for our application state
$.applicationState = {
    // The name of the user
    userName: "John Doe",
    
    // The current geocache that a user has selected. Defaults to null since a user doesn't initially have one selected.
    selectedGeocache: null,

    // Filters related to what caches should be displayed
    settings: {
        easy: false,
        normal: true,
        hard: true
    },

    // A few collections of of our mocked up geocache locations
    allGeocaches: [
        { id:1, name: "My First GeoCache", group: 0 },
        { id: 2, name: "By the pond", group: 0 },
        { id: 3, name: "Near the forrest", group: 0 },
        { id: 4, name: "Through the woods", group: 0 },
        { id: 5, name: "Prairy day", group: 1 },
        { id: 6, name: "Twins Stadium", group: 1 }
    ],

    init: function () {
        // Set the user-name for the current user
        $("#user-name").text($.applicationState.userName);

        $('#user-settings').live('pageinit', function (event) {
            $.applicationState.initUserSettings();
        });

        $('#caches').live('pageinit', function (event) {
            $.applicationState.initCaches();
        });

        $('#cache-detail').live('pageinit', function (event) {
            $.applicationState.initCacheDetail();
        });
    },

    // Initialized the user settings page.
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

    initCaches: function () {
        // Add all geocaches to the list view in there appropriate section
        this.addSectionHeader($("#caches-collection"), "Near You");
        this.addItems($("#caches-collection"), $.grep($.applicationState.allGeocaches, function (item) { return item.group == 0 }));
        this.addSectionHeader($("#caches-collection"), "Recommended for you");
        this.addItems($("#caches-collection"), $.grep($.applicationState.allGeocaches, function (item) { return item.group == 1 }));

        // Attach an event listener to each item in the collection
        $('#caches-collection li').live('click', function () {
            var id = $("a", this).attr("geo-id");
            if (id) {
                var idInt = parseInt(id);
                var item = $.grep($.applicationState.allGeocaches, function (item, index) { return item.id == idInt; })[0];
                $.applicationState.selectedGeocache = item;
            }
        });
    },

    initCacheDetail: function () {
        $("#cache-name").text($.applicationState.selectedGeocache.name);
    },

    // Adds a section header to a list view.
    addSectionHeader: function (collectionView, headerText) {
        var template = '<li data-role="list-divider" role="heading">' + headerText + '</li>';
        collectionView.append(template);
    },

    // Adds a collection of items to a list view.
    addItems: function (collectionView, items) {
        $.each(items, function (index, item) {
            var template = '<li data-theme="c"><a href="cache-detail.html" data-transition="slide" geo-id=' + item.id + '>' + item.name + '</a></li>';
            collectionView.append(template).listview('refresh');
        });
    }
}
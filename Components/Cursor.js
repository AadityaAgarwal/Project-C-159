AFRAME.registerComponent("cursor_event_listener", {
    schema: { selected_item_id: { default: '', type: "string" } },

    init: function () {
        this.handle_mouse_enter_events()
        this.handle_mouse_leave_events()
    },

    update: function () {
        const fadeBackgroundEl = document.querySelector("#fadedBackground")

        c = fadeBackgroundEl.children;
        if (c.length > 0) {
            var i;
            for (i = 0; i <= c.length; i++);
        }
        else this.handle_mouse_click_events()
    },

    handle_places_list: function () {
        const id = this.el.getAttribute("id")
        const books_id = ["captain-aero", "outer-space", "spiderman", "superman"]
        if (books_id.includes(id)) {
            const books_container = document.querySelector("#books")
            books_container.setAttribute("cursor_event_listener", { selected_item_id: id })
            this.el.setAttribute("material", {
                color: "blue",
                opacity: 1,
            })
        }
    },

    handle_mouse_enter_events: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handle_places_list()
        })
    },

    handle_mouse_leave_events: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selected_item_id } = this.data;
            if (selected_item_id) {
                const el = document.querySelector(`#${selected_item_id}`)
                const id = el.getAttribute("id")
                if (id == selected_item_id) {
                    el.setAttribute("material", {
                        color: "white",
                        opacity: 1,
                    })
                }
            }
        })
    },

    handle_mouse_click_events: function () {
        this.el.addEventListener("click", () => {
            const { selectedItemId } = this.data;

            const fadeBackgroundEl = document.querySelector("#fadeBackground");
            const titleEl = document.querySelector("#app-title");
            const cursorEl = document.querySelector("#cursor");

            //check the selected item to set the "info-banner" component on the plane
            if (selectedItemId) {
                fadeBackgroundEl.setAttribute("visible", true);
                fadeBackgroundEl.setAttribute("info-banner", {
                    itemId: selectedItemId,
                });
                titleEl.setAttribute("visible", false);
                cursorEl.setAttribute("position", { x: 0, y: 0, z: -1 });
                cursorEl.setAttribute("geometry", {
                    radiusInner: 0.03,
                    radiusOuter: 0.04,
                });
            } else {
                //else make the plane invisible
                fadeBackgroundEl.setAttribute("visible", false);
                titleEl.setAttribute("visible", true);
                cursorEl.setAttribute("position", { x: 0, y: 0, z: -3 });
                cursorEl.setAttribute("geometry", {
                    radiusInner: 0.08,
                    radiusOuter: 0.12,
                });
            }
        });
    },
},

)
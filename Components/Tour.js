AFRAME.registerComponent("tour", {
    init: function () {
        this.books = this.el;
        this.create_cards()
    },
    create_cards: function () {
        const thumbnail_ref = [{
            id: "captain-aero",
            title: "Captain Aero",
            url: "./assets/captain-aero-poster.jpeg",
        },
        {
            id: "outer-space",
            title: "Outer Space",
            url: "./assets/outer-space-poster.jpeg",
        },
        {
            id: "spiderman",
            title: "Spiderman",
            url: "./assets/spiderman-poster.jpeg",
        },
        {
            id: "superman",
            title: "Superman",
            url: "./assets/superman-poster.jpeg",
        },
        ]

        let prev_x_pos = -60;
        for (var item of thumbnail_ref) {
            const pos_x = prev_x_pos + 25
            const pos_y = 10
            const pos_z = -40
            const pos = { x: pos_x, y: pos_y, z: pos_z }
            prev_x_pos = pos_x

            const border_el = this.create_border(item.id, pos)
            const thumbnail_el = this.create_thumbnail(item)
            border_el.appendChild(thumbnail_el)
            const title_el = this.create_title(pos, item)
            border_el.appendChild(title_el)
            this.books.appendChild(border_el)
        }
    },

    create_border: function (id, position) {
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("id", id)
        entity_el.setAttribute("position", position)
        entity_el.setAttribute("visible", true)
        entity_el.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10
        })
        entity_el.setAttribute("material", {
            color: "white",
            opacity: 1,
        })
        entity_el.setAttribute("cursor_event_listener", {})
        return entity_el
    },
    create_thumbnail: function (item) {
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("visible", true)
        entity_el.setAttribute("geometry", {
            radius: 9,
            primitive: "circle",
        })
        entity_el.setAttribute("material", {
            src: item.url,
        })
        return entity_el
    },

    create_title: function (position, item) {
        const entity_el = document.createElement("a-entity")
        entity_el.setAttribute("text", {
            value: item.title,
            font: "exo2bold",
            align: "center",
            color: "black",
            width: 60,
        })
        const text_pos = position
        text_pos.y = -20
        entity_el.setAttribute("position", text_pos)
        entity_el.setAttribute("visible", true)
        return entity_el
    },
})
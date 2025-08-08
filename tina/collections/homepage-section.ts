import { Collection } from "tinacms";

const HomepageSection: Collection = {
    name: "homepageSection",
    label: "Homepage Section",
    path: "content/homepage",
    format: "md",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Section Title",
            description: "The title for the section",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            name: "header_menu_title",
            label: "Header Menu Title",
            description: "The title of the link to the section which will appear in the header menu",
            isTitle: false,
            required: true,
        },
        {
            type: "string",
            name: "navigation_menu_title",
            label: "Navigation Menu Title",
            description: "The title of the link to the section which will appear in the navigation menu",
            isTitle: false,
            required: true,
        },
        {
            type: "number",
            name: "weight",
            label: "Section Priority",
            description: "The weight of priority for the section of the ordering in the homepage",
            required: true,
        },
        {
            type: "boolean",
            name: "header_menu",
            label: "Appears in Header Menu",
            description: "Whether the section should appear in the header menu",
            required: true,
        },
        {
            type: "rich-text",
            name: "sectionText",
            label: "Section Text",
            description: "The text content for the section",
            isBody: true,
        },
    ],
};

export default HomepageSection;
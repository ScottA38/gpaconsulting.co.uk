import { Collection, Form } from "tinacms";

const HomepageConfig: Collection = {
    name: "indexConfig",
    label: "Index Configuration",
    path: "content",
    match: {
        include: "_index"
    },
    format: "md",
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    fields: [
        {
            type: "rich-text",
            name: "header_headline",
            label: "Homepage Title",
            description: "The main title which will appear when you load the website",
            required: true,
            isBody: false,
        },
        {
            type: "rich-text",
            name: "header_subheadline",
            label: "Homepage Subheading",
            description: "A sub-heading (or 'strapline') which will appear directly under the main title of the website",
            required: true,
            isBody: false,
        },
        {
            type: "image",
            name: "header_logo",
            label: "The logo image you wish to use on your website",
            required: true, 
        },
        {
            type: "image",
            name: "header_image",
            description: "A large-scale image which will appear behind the site title and sub-heading",
            label: "Hero Background Image",
            required: true
        },
        {
            type: "boolean",
            name: "header_use_video",
            label: "Toggle whether or not to use video on the homepage"
        },
        {
            type: "string",
            name: "navToTopTitle",
            label: "Nav to Top text",
            description: "Within the site navigation an item exists which allows you to navigate back to the top of the page. This the value shown here represents what text will be used for this button",
        },
    ]
};

export default HomepageConfig;

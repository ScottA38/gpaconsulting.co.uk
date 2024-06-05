import { Collection } from "tinacms";

const CompanyService: Collection = {
    name: "companyService",
    label: "Service",
    path: "data/companyservices",
    format: "json",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Service Name",
            description: "Define the name for a service the company offers",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            name: "strapline",
            label: "Strapline",
            description: "A short and sweet summary of the service the defined company service",
            required: true,
        },
        {
            type: "image",
            name: "serviceImage",
            label: "Service Image",
            description: "Insert a photo which represents the service you wish to describe",
        },
    ],
};

export default CompanyService;
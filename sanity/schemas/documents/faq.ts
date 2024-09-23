import { HelpCircleIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
    name: "faq",
    title: "FAQ",
    icon: HelpCircleIcon,
    type: "document",
    fields: [
        defineField({
            name: "question",
            title: "Question",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "answer",
            title: "Answer",
            type: "string",
            validation: (rule) => rule.required(),
        }),
    ],
});

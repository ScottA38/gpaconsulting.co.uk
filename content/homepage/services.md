---
title: 'Services'

# The "header_menu_title" value will be used as text for header buttons.
# The "title" value will be used if value for "header_menu_title" is not provided.
header_menu_title: 'The Auditing Process'

# The "navigation_menu_title" value will be used as text for fixed menu items.
# The "title" value will be used if value for "navigation_menu_title" is not provided.
navigation_menu_title: 'Our Process'

# The "weight" will determine where this section appears on the "homepage".
# A bigger weight will place the content more towards the bottom of the page.
# It's like gravity ;-).
weight: 3

# If "header_menu" is true, then a button linking to this section will be placed
# into the header menu at the top of the homepage.
header_menu: true
---

When we audit for you, we will first meet with you to agree audit scope. This will allow you the time and space to clarify any uncertainties you may have about our processes within the scope of our audit for you.

From there, we will agree specifics of out work with you, such as whether an on-site visit is required to the auditee firm, the nature of the binding authorties to audit etc. This will determine the duration of the auditing process.

Once we have reached an understanding, we will discreetly investigate all required areas of the business in question and report back to you our findings.

{{< services.inline >}}
        {{ range $key, $value := .Site.Data.companyservices }}
            {{ partial "service.html" (dict "context" . "serviceName" $key "serviceData" $value ) }}
        {{ end }}
{{< /services.inline >}}
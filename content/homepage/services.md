---
title: 'Our Services'

# The "header_menu_title" value will be used as text for header buttons.
# The "title" value will be used if value for "header_menu_title" is not provided.
header_menu_title: 'Services'

# The "navigation_menu_title" value will be used as text for fixed menu items.
# The "title" value will be used if value for "navigation_menu_title" is not provided.
navigation_menu_title: 'Our Services'

# The "weight" will determine where this section appears on the "homepage".
# A bigger weight will place the content more towards the bottom of the page.
# It's like gravity ;-).
weight: 3

# If "header_menu" is true, then a button linking to this section will be placed
# into the header menu at the top of the homepage.
header_menu: true
---

{{< services.inline >}}
        {{ range $key, $value := .Site.Data.companyservices }}
            {{ partial "service.html" (dict "context" . "serviceName" $key "serviceData" $value ) }}
        {{ end }}
{{< /services.inline >}}
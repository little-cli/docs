---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content

<!-- support vue syntax -->

{{ 1 + 1 }}
<span v-for="i in 3">{{ i }}</span>

<script setup>
import { useData } from 'vitepress'

const { page } = useData()
</script>

<pre>{{ page }}</pre>

::: v-pre
`{{ This will be displayed as-is }}`
:::

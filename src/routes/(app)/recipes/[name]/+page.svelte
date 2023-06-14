<script>
    import { onMount } from "svelte";

    export let data;

    onMount(() => {
        console.log(recipes)
    })
</script>

{data.post.title}
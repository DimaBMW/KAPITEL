<script>
    import '$lib/vendors/app.scss';
    import Header from '$section/Header.svelte';
    import DesignStagesBlack from '../../sections/DesignStages_Black.svelte';
    import PostProjectSupportObject from '../../sections/Post-project_support_object.svelte';
    import ProjectDirectories from '../../sections/ProjectDirectories.svelte';
    import Partners from '../../sections/Partners.svelte';
    import Quetions from '../../sections/Quetions.svelte';
    import Footer from '../../sections/Footer.svelte';
    import MainSaitBar from '../../sections/MainSaitBar.svelte';
    import HeaderMobile from '../../sections/Header__mobile.svelte';
    import  {  Cursor  }  from  'curseur';

    let innerWidth;
</script>

<svelte:head>
    <title>Kapitel</title>
</svelte:head>
<svelte:window bind:innerWidth />

{#if innerWidth<759.98}
    <HeaderMobile/>
{:else}
    <Header />
    <MainSaitBar/>
    <DesignStagesBlack/>
    <PostProjectSupportObject/>
    <ProjectDirectories/>
    <Partners/>
    <Quetions/>
    <Footer/>
    <slot />
{/if}
<style lang="scss">
    
</style>
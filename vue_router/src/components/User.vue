<template>
    <h1> name: {{ $route.params.username }}</h1>
    <h2>id: {{ $route.params.id }}</h2>
</template>

<script>
    export default {
        name: 'User_Demo'
    }
</script>
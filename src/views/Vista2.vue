<template>
<div class="Vista2">
     <carduser :us="user"  />
</div>
</template>

<script>
import carduser from "@/components/carduser.vue"

export default {
    name: 'Vista2',
    components: {
        carduser,
    },
    props: ['id'],
    computed: {
        user(){
            return this.$store.getters.userByEmail(this.id)
        }
    },
}
</script>

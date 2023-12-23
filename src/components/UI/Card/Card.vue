<script setup>

const props = defineProps ({
    result: null
})

</script>

<template>

    <div class="card">
        <div class="card__res">
            <h3 class="card__res-title">Your Result</h3>

            <div class="card__res-circle">
                <span class="card__res-circle-num">76</span>
                <span class="card__res-circle-per">of 100</span>
            </div>

            <p class="card__res-rating">Great</p>

            <p class="card__res-txt">You scored higher than 65% of the people who have taken these tests.</p>
        </div>

        <div class="card__sum">

        </div>
    </div>

</template>

<style lang="scss">
    
.card {
    border-radius: 20px;
    background: ;
}

</style>
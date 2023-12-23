<script setup>
import MemoryIcon from "@/assets/images/icons/MemoryIcon.vue";
import ReactionIcon from "@/assets/images/icons/ReactionIcon.vue";
import VerbalIcon from "@/assets/images/icons/VerbalIcon.vue";
import VisualIcon from "@/assets/images/icons/VisualIcon.vue";

const props = defineProps({
  result: null,
});
</script>

<template>
  <div class="card">
    <div class="card__res">
      <h3 class="card__res-title">Your Result</h3>

      <div class="card__res-circle">
        <span class="card__res-circle-num">{{result?.total}}</span>
        <span class="card__res-circle-per">of 100</span>
      </div>

      <p class="card__res-rating">Great</p>

      <p class="card__res-txt">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>

    <div class="card__sum">
      <h3 class="card__sum-title">Summary</h3>

      <div class="card__sum-list">
        <div class="card__sum-el">
            <div class="card__sum-el-name">
                <ReactionIcon />
                <span>Reaction</span>
            </div>
                
            <p class="card__sum-el-num">{{ result?.summary?.reaction }} <span>/ 100</span></p>

        </div>
        <div class="card__sum-el">
            <div class="card__sum-el-name">
                <MemoryIcon />
                <span>Memory</span>
            </div>
                
            <p class="card__sum-el-num">{{ result?.summary?.memory }} <span>/ 100</span></p>

        </div>
        <div class="card__sum-el">
            <div class="card__sum-el-name">
                <VerbalIcon />
                <span>Verbal</span>
            </div>

            <p class="card__sum-el-num">{{ result?.summary?.verbal }} <span>/ 100</span></p>

        </div>
        <div class="card__sum-el">
            <div class="card__sum-el-name">
                <VisualIcon />
                <span>Visual</span>
            </div>

            <p class="card__sum-el-num">{{ result?.summary?.visual }} <span>/ 100</span></p>

        </div>
      </div>

      <a href="#!" class="card__sum-btn">Continue</a>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  border-radius: 25px;
  box-shadow: 15px 20px 51px -20px var(--accentColor);
  display: flex;
  flex-wrap: wrap;

  &__res,
  &__sum {
    padding: 35px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 25px;
    gap: 35px;

    &-title {
        font-size: 22px;
        font-weight: 700;
    }
  }

  &__res {
    background: linear-gradient(180deg, var(--bgColor1), var(--bgColor2));
    width: 300px;
    text-align: center;
    align-items: center;

    &-title {
        color: var(--primaryColor);
    }

    &-circle {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        overflow: hidden;
        background: linear-gradient(180deg, var(--circleColor1), var(--circleColor2));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-num {
            font-size: 60px;
            font-weight: 500;
            color: var(--primaryColor);
        }

        &-per {
            color: var(--accentColor);
        }
    }

    &-rating {
        font-size: 30px;
        color: var(--primaryColor);
        font-weight: 800;
    }

    &-txt {
        font-size: 18px;
        color: var(--primaryColor);
    }
  }

  &__sum {

    &-title {
        color: var(--secAccentColor);
    }

    &-list {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    &-el {
        display: flex;
        padding: 15px 10px;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px;
        background: #00000056;
        font-weight: 700;
        
        &:nth-of-type(1) {
            color: var(--summaryColor1);
            background: var(--trSummaryColor1);
        }
        &:nth-of-type(2) {
            color: var(--summaryColor2);
            background: var(--trSummaryColor2);
        }
        &:nth-of-type(3) {
            color: var(--summaryColor3);
            background: var(--trSummaryColor3);
        }
        &:nth-of-type(4) {
            color: var(--summaryColor4);
            background: var(--trSummaryColor4);
        }
        
        &-name {
            display: flex;
            align-items: center;
            gap: 10px;

        }

        &-num {
            color: var(--secAccentColor);

            span {
                color: var(--rdAccentColor);
            }
        }
    }

    &-btn {
        background: var(--secAccentColor);
        padding: 20px;
        text-align: center;
        border-radius: 25px;
        color: var(--primaryColor);
        transition: 400ms;
        
        &:hover {
            background-image: linear-gradient(hsl(252, 100%, 67%), hsl(241, 81%, 54%));
        }
    }
  }

  @media (max-width: 636px) {
    flex-direction: column;

    &__res,
    &__sum {
        width: 100%;
    }
  }
}
</style>

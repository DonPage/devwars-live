<template>
    <div :class="`game-view-team-menu ${team}`">
        <button :class="viewSite ? 'fade' : ''" @click="$emit('onViewCode')">
            <CodeTagsIcon class="icon"/>
        </button>
        <button :class="viewSite ? '' : 'fade'" @click="$emit('onViewSite')">
            <ApplicationIcon/>
        </button>
        <div class="fill"></div>
        <button @click="$emit('onToggleExpanded')">
            <ArrowCollapseIcon v-if="expanded"/>
            <ArrowExpandIcon v-else/>
        </button>
    </div>
</template>


<script>
import ApplicationIcon from 'vue-material-design-icons/application';
import ArrowCollapseIcon from 'vue-material-design-icons/arrow-collapse';
import ArrowExpandIcon from 'vue-material-design-icons/arrow-expand';
import CodeTagsIcon from 'vue-material-design-icons/code-tags';

export default {
    components: {
        ApplicationIcon,
        ArrowCollapseIcon,
        ArrowExpandIcon,
        CodeTagsIcon,
    },

    props: {
        team: { type: String, required: true },
        viewSite: { type: Boolean, default: false },
        expanded: { type: Boolean, default: false },
    },
};
</script>


<style lang="scss" scoped>
@import '../styles/variables';

.game-view-team-menu {
    display: flex;
    flex-flow: column nowrap;

    &.blue .material-design-icon {
        color: $blue-team-color;
    }

    &.red .material-design-icon {
        color: $red-team-color;
    }

    button {
        display: flex;
        width: 3rem;
        height: 3rem;
        justify-content: center;
        border: none;
        font-size: 1.5rem;

        &:active {
            background-color: transparent;
        }

        &.fade .material-design-icon {
            opacity: 0.25;
        }
    }

    .fill {
        flex: 1;
    }
}
</style>

<template>
    <div class="editor-group">
        <EditorPlayer
            v-for="editor in editors"
            :key="editor.id"
            :id="editor.id"
            :team="editor.team"
            :language="editor.language"
        />
    </div>
</template>


<script>
import EditorPlayer from './EditorPlayer';

export default {
    components: { EditorPlayer },

    props: {
        editors: { type: Array, required: true },
    },
};
</script>


<style lang="scss" scoped>
@import '../styles/variables';

.editor-group {
    display: flex;
    flex: 1;

    .editor-player {
        flex: 1 1 100%;
        &:not(:last-child) {
            border-right: $border;
        }
    }
}
</style>

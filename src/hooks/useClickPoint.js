import { reactive, toRefs, onMounted, onUnmounted } from 'vue'

function useClickPoint() {
    const state = reactive({
        x: 0,
        y: 0
    })

    function logPoint(e) {
        state.x = e.pageX;
        state.y = e.pageY;
        console.log(state.x, state.y);
    }

    onMounted( () => {
        console.log('onMounted');
        window.addEventListener('click', logPoint);
    })

    onUnmounted(() => {
        console.log('unmounted');
        window.removeEventListener('click', logPoint);
    })

    return toRefs(state)
}

export default useClickPoint;
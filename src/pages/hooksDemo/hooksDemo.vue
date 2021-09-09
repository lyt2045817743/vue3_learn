<template>
  <h1>鼠标正在点击位置：（{{x}}， {{y}}）</h1>
</template>

<script>
import useClickPoint from '../../hooks/useClickPoint'
export default {
    name: 'hooksDemo',
    setup() {
        const { x, y } = useClickPoint();
        return {
            x,
            y
        }
    }
}
</script>
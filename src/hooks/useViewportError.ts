const useViewportError = () => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth > 770) {
    throw new RangeError('지원되지 않는 해상도 입니다.');
}
}

export default useViewportError;

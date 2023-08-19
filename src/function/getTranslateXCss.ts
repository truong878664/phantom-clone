function getTranslateXCss(element: HTMLElement): number {
    const transformValue = getComputedStyle(element).transform;
    const matrix = transformValue.match(/^matrix\((.+)\)$/);
    if (!matrix) return 0;
    const matrixValues = matrix[1].split(', ');
    const translateXValue = parseFloat(matrixValues[4]);
    return translateXValue || 0;
}

export default getTranslateXCss;
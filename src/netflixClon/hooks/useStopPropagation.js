

export const useStopPropagation = () => {
  
    const onPropagation = (e) => {
        e.stopPropagation();
    }

    return {
        onPropagation
    }
}

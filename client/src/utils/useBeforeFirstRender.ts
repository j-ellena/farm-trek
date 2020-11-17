import { useEffect, useState } from 'react'

const useBeforeFirstRender = (f: any) => {
    const [hasRendered, setHasRendered] = useState(false)
    useEffect(() => setHasRendered(true), [hasRendered])
    if (!hasRendered) {
        f()
    }
}

export default useBeforeFirstRender

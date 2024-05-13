export function About() {
    return (
        <div>
            <h3>React Hooks</h3>
            <ul>
                <li>
                    <h4 className="font-bold text-2xl">useState()</h4>
                    <p>Returns a <strong>stateful value</strong>, and a function to update it</p>
                    <p>useState() updater function is not required in dependecy arrays</p>
                    {/* TODO change alert function for the modal */}
                    <ul>
                        <li>Track multiple state itmes, the form data as well as meta data about the form</li>
                        <li>Use as <strong>many ueState() hooks</strong> as needed one for the person object, a second for the dirty and valid states</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useEffect()</h4>
                    <p>Accepts a function that contains imperative, possibly <strong>effectful code</strong>, shold never return a promise</p>
                    <ul>
                        <li><strong>useEffect()</strong> executes <strong>asynchronously</strong></li>
                        <li>After the component is painted on screen</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useLayoutEffect()</h4>
                    <p>Like useEffect() but <strong>fires synchronously</strong> after all DOM mutations</p>
                    <ul>
                        <li><strong>useLayoutEffect()</strong> executes <strong>synchronously</strong></li>
                        <li>After the render but before the component is painted</li>
                        <li><strong>Normally useEffect()</strong> is what you need</li>
                        <li>Use useLayoutEffect() when you want the sychronous behavior</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useContext()</h4>
                    <p>Accepts <strong>a context object</strong> and return it's current value</p>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useRef()</h4>
                    <p>Returns a mutable ref object whose <strong>.current property</strong>is initialized to the passed argument</p>
                    <ul>
                        <li>One of it's main purposes is to get a <strong>reference to a DOM element</strong></li>
                        <li>Can be used to keep a reference to any state</li>
                        <li>Holds the same state with each render</li>
                        <li>Updating the state doesn't trigger a render</li>
                        <li>useRef() is stable and <strong>doesn't need to be added, is not required in dependency arrays</strong></li>
                        <li>Great way to share values between use Effect() functions</li>
                        <li>With useRef() you can maintain any state for a component</li>
                        <li>When you don't want a render on updates</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useCallback()</h4>
                    <p>Returns a memoized callback</p>
                    <ul>
                        <li><strong>Pass a function and dependencies</strong> to useCallback()</li>
                        <li>Returns the same function reference with the same dependencies</li>
                        <li>Useful when <strong>passing callback to child</strong> components or other hooks</li>

                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useMemo()</h4>
                    <p>Returns a memoized value</p>
                    <ul>
                        <li>Uses the creator function to recompute a value, only when the dependencies change</li>
                        <li>useMemo() is a performance optimization, not a semantic guarantee</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useDebugValue()</h4>
                    <ul>
                        <li>Used to display a label for custom hooks in React DevTools</li>
                        <li>Only recommended for reusable hooks</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useReducer()</h4>
                    <ul>
                        <li><strong>useReducer() is </strong>the <strong>more powerful </strong>brother of useState()</li>
                        <li>Internally useState() is just a special useReducer()</li>
                        <li><strong>Dispatch action objects</strong> and use a reducer function to create state, very similar to how Redux works</li>
                        <li>The state is still <strong>tied to a component</strong> not global like with Redux</li>
                    </ul>
                </li>
            </ul>
            <h3 className="text-2xl">Custom Hooks Person editor</h3>
            <ul>
                <li>Make component code reusable</li>
                <li>Great for extrascting code from componnets. Even when reuse is not a goal</li>
                <li>Custom hooks can use other React hooks as needed.</li>
                <li>Custom hooks must be functions named 'use...'</li>
            </ul>
            <ul>
                <li>
                    <h4 className="font-bold text-2xl">usePerson()</h4>
                    <p>Takes an initial person as an input argument, returns person and setPerson</p>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useDebounce()</h4>
                    <p>Creating a <strong>debounce hook with useEffect()</strong></p>
                    <ul>
                        <li>Execute the code vie a setTimeout()</li>
                        <li>Cancel the setTimeout() in the cleanup</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useThrottle()</h4>
                    <ul>
                        <li>A debounced functions is only called after it has not been called for a specified duration</li>
                        <li>A throttled function is called once after ever timeout</li>
                    </ul>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useIsMounted()</h4>
                    <p>useRef() + useLayoutEffect()</p>
                </li>
                <li>
                    <h4 className="font-bold text-2xl">useWillUnmount()</h4>
                    <p>Creating an <strong>unmount hook with the useEffect()</strong></p>
                    <ul>
                        <li>Execute the passed code in the effect cleanup</li>
                        <li>Use a ref so there are no dependencies</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
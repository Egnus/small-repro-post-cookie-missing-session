<script context="module" lang="ts">
import type { Load } from "@sveltejs/kit";


    export const load: Load = async ({ session }) => {
		if(session.test !== '1234') {
            return {
                status: 303,
                redirect: '/'
            }
        }
        return {
            props: {
                secret: session.test
            }
        }
	};
</script>
<script>
    export let secret
</script>

<h1>The secret was '{secret}'</h1>

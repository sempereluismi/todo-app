import { ref, computed } from "vue"
import { useStore } from "vuex"

const useTodos = () => {
    const store = useStore()

    const currentTab = ref('all')
    const textTodo = ref('')

    return {
        currentTab,
        textTodo,

        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),

        getTodosByTab: computed( () => store.getters['getTodosByTab']( currentTab.value ) ),
        toggleTodo: ( id ) => store.commit('toggleTodo', id ),
        deleteEntry: ( id ) => store.commit('deleteEntry', id),
        deleteAllEntries: () => store.commit('deleteAllEntries'),
        addEntry: ( text ) => {
            store.commit('addEntry', text)
            textTodo.value = ''
        }
    }
}


export default useTodos
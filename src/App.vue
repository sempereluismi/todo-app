<template>

  <header>
    <h1>#todo</h1>

    <nav>
      <div class="options">
        <span :class="{ 'active': currentTab == 'all' }" @click="currentTab = 'all'">All</span>
        <span :class="{ 'active': currentTab == 'pending' }" @click="currentTab = 'pending'">Active</span>
        <span :class="{ 'active': currentTab == 'completed' }" @click="currentTab = 'completed'">Completed</span>
      </div>
    </nav>
  </header>


  <section>
    <div class="add-entry"
    v-if="currentTab != 'completed'">
      <input type="text" placeholder="add entry" v-model="textTodo">
      <button
      @click="addEntry( textTodo )">Add</button>
    </div>
  </section>

  <section>
    <div class="display-entries">
      <ul>
        <li v-for="todo in getTodosByTab" :key="todo.id">
          <div class="entry">
            <div>
              <input type="checkbox" @click="toggleTodo( todo.id )" :checked="todo.completed">
              <p
              :class="{'completed': todo.completed }"> {{ todo.text }}</p>
            </div>
            <i class="fa-solid fa-trash" 
            v-show="(currentTab == 'completed')"
            @click="deleteEntry( todo.id )"></i>
          </div>
        </li>
      </ul>
    </div>

  </section>

  <section>

    <button class="deleteEntries"
    v-if="(currentTab == 'completed')"
      @click="deleteAllEntries">
      <i class="fa-solid fa-trash"></i>
        <p>DeleteAll</p>
      </button>

  </section>
</template>

<script>
import useTodos from '@/composables/useTodos'

export default {

  setup() {
    const { 
      currentTab, 
      getTodosByTab, 
      toggleTodo, 
      pending, 
      textTodo, 
      deleteEntry,
      deleteAllEntries,
      idx,
      addEntry 
    } = useTodos()

    return {
      pending,
      currentTab,
      getTodosByTab,
      toggleTodo,
      textTodo,
      deleteEntry,
      deleteAllEntries,
      addEntry,
      idx
    }
  }

}
</script>

<style scoped>
h1 {
  font-family: 'Raleway';
  text-align: center;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  letter-spacing: -0.045em;

  margin: 3rem 0 0 0;
  color: #333333;
}

span {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  padding: .3rem 1.7rem;

  cursor: pointer;
}

nav {
  display: flex;
  justify-content: center;
}

.add-entry {
  margin-top: 0.9rem;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.options {
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 8rem;

  padding: 1rem 3rem;
}

.active {
  border-bottom: solid 3px #2F80ED;
}

.add-entry input {
  width: 450px;
  border: 1px solid #BDBDBD;
  border-radius: 12px;
  padding: 0.8rem 0.4rem;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  transition: all .1s ease-in;
}

.add-entry input:focus {
  outline: none;
  border: 1px solid #8d8d8d;
}

button {
  border: none;
  background: #2F80ED;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  width: 100px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #FFFFFF;
  cursor: pointer;
}

button:active {
  background: #2669c2;
}

.display-entries {
  display: flex;
  justify-content: center;
  align-items: center;
}

.display-entries p {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #333333;
}

.display-entries input {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 570px;
  padding: 0.7rem;
}

.entry div {
  display: flex;
  align-items: center;
  gap: .5rem;
}

ul {
  list-style: none;
}

.completed {
  text-decoration: line-through;
}

.deleteEntries {
  background: #EB5757;
  border-radius: 4px;
  padding: 1rem 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}



section {
  display: flex;
  justify-content: center;
}


.deleteEntries:active{
  background: #ff5f5f;
}

i {
  cursor: pointer;
}
</style>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      sabores: [
        { id: "61230be1-5988-4506-b5cc-034d275ea2af", nome: "4 queijos" },
        { id: "75f3e938-fd69-4214-b479-6ed45144f404", nome: "Calabresa" },
      ],
      novo_sabor: "",
    };
  },
  methods: {
    add() {
      if (this.novo_sabor !== "") {
        const novo_id = uuidv4();
        this.sabores.push({
          id: novo_id,
          nome: this.novo_sabor,
        });
        this.novo_sabor = "";
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h2>Sabores de Pizzas</h2>
    </div>
    <div class="form_input">
      <input type="text" v-model="novo_sabor" />
      <button @click="add">Add</button>
    </div>
    <div class="list_sabores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>SABOR</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sabor in sabores" :key="sabor.id">
            <td>{{ sabor.id }}</td>
            <td>{{ sabor.nome }}</td>
            <td>???</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<template>
    <div class="fixed bottom-8 right-8 flex flex-col items-end justify-end">
        <div class="bg-neutral-800 rounded-md p-4 flex flex-col gap-4 mb-4" v-if="showForm">
            <div>
                <label for="name" class="block text-sm/6 font-medium text-gray-100">Nombre</label>
                <div class="mt-2">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        v-model="formData.name"
                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900" 
                    />
                </div>
            </div>

            <div>
                <label for="type" class="block text-sm/6 font-medium text-gray-100">Tipo</label>
                <div class="mt-2">
                    <select 
                        name="type" 
                        id="type" 
                        v-model="formData.type"
                        class="w-full rounded-md h-9 text-gray-800 px-2 focus:outline-green-500">
                        <option class="text-gray-900" value="Gasto">Gasto</option>
                        <option class="text-gray-900" value="Ingreso">Ingreso</option>
                    </select>
                </div>
            </div>

            <div>
                <label for="price" class="block text-sm/6 font-medium text-gray-100">Precio</label>
                <div class="mt-2">
                    <div class="flex items-center rounded-md bg-white px-3">
                        <div class="shrink-0 select-none text-base text-gray-500">$</div>
                        <input 
                            type="text" 
                            name="price" 
                            id="price" 
                            v-model="formData.price"
                            class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900" 
                            placeholder="0.00" 
                        />
                        <div class="shrink-0 select-none text-base text-gray-500">USD</div>
                    </div>
                </div>
            </div>

            <button 
                type="button" 
                class="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white"
                @click="saveToLocalStorage">
                Añadir
            </button>
        </div>
        <button 
            type="button" 
            class="rounded-full bg-green-600 p-2 text-white shadow-sm hover:bg-green-500"
            @click="toggleForm">
            <svg class="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                    d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "FormInput",
    setup() {
        const showForm = ref(false);
        const formData = ref({
            name: '',
            type: 'Gasto',
            price: '',
            date: new Date().toLocaleDateString(),
        });

        const toggleForm = () => {
            showForm.value = !showForm.value;
        };

        const saveToLocalStorage = () => {
            if (formData.value.name && formData.value.type && formData.value.price) {
                const existingData = JSON.parse(localStorage.getItem("myData")) || [];
                existingData.push({ ...formData.value });
                localStorage.setItem("myData", JSON.stringify(existingData));
                alert("Datos actualizados correctamente");
                formData.value = { name: '', type: 'Gasto', price: '' };
                showForm.value = false;
                window.location.reload();
            }
        };

        return {
            showForm,
            toggleForm,
            formData,
            saveToLocalStorage,
        };
    },
};
</script>

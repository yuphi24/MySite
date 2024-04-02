<script setup>
import Navbar from "./Navbar.vue";
import { ref, onMounted } from "vue";
import { CButton, CForm, CFormSelect, CFormInput, CInputGroup, CInputGroupText } from "@coreui/bootstrap-vue";
import axios from "axios";

const showPassword = ref(false);

const toggleShow = () => {
    showPassword.value = !showPassword.value;
};

const password = ref("");
const selectedPdf = ref(null);
const pdfFiles = ref([]);

const fetchPDFFiles = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/files/');
    console.log(response);
    pdfFiles.value = response.data;
  } catch (error) {
    console.error('Failed to fetch PDF files:', error);
  }
};

const downloadPDF = async () => {
  try {
    console.log("downloadPDF is called");
    const response = await axios.post('http://127.0.0.1:8000/api/download-pdf/', {
      password: password.value,
      pdf_id: selectedPdf.value
    }, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Resume_YuiTakahashi.pdf');
    document.body.appendChild(link);
    link.click();
  } catch (error) {
    console.error('Failed to download PDF:', error);
  }
};

onMounted(fetchPDFFiles);
</script>

<template>
<div>
    <header>
        <Navbar />
    </header>
    <main>
        <section class="resume">
            <div class="container">
                <div class="section-title">
                    <h2>Resume</h2>
                </div>
                <CForm>
                    <h3>Download Files</h3>
                    <div class="select-container">
                        <p>Choose File</p>
                        <CFormSelect v-model="selectedPdf">
                            <option></option>
                            <option v-for="pdf in pdfFiles" :key="pdf.id" :value="pdf.id">{{ pdf.title }}</option>
                        </CFormSelect>
                    </div>
                    <div class="password-container">
                        <p>Enter Password</p>
                        <CInputGroup>
                            <CFormInput v-if="showPassword" type="text" v-model="password" />
                        <CFormInput v-else type="password" v-model="password" />
                            <CInputGroupText><fa @click="toggleShow" :icon="showPassword ? 'eye-slash' : 'eye'" class="icon"/></CInputGroupText>
                        </CInputGroup>   
                    </div>
                    <CButton
                        type="button"
                        color="secondary"
                        @click="downloadPDF"
                    >
                        PDF Download
                    </CButton>
                </CForm>
            </div>
        </section>
    </main>
</div>
</template>

<style scoped>
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
main {
    padding-top: 30px;
}
section {
    padding: 60px 0;
}
.section-title {
    text-align: center;
    padding-bottom: 30px;
}
.section-title h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
}
.section-title h2::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #34b7a7;
    bottom: 0;
    left: calc(50% - 25px);
}
.container {
    width: 100%;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
}
@media (max-width: 767px) {
    .container {
        max-width: 540px;
    }
}
@media (min-width: 767px) {
    .container {
        max-width: 700px;
    }
}
/*--------------------------------------------------------------
# download container
--------------------------------------------------------------*/
.select-container {
    margin-top: 20px;
}
.password-container {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>


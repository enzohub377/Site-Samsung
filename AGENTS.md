# Convenções de Linguagem e Desenvolvimento
## Samsung Store - Landing Page

### 🌍 Idioma e Localização

**Idioma Principal:** Português Brasileiro (pt-br)

- Todo conteúdo, variáveis, funções e comentários devem ser em português
- O arquivo `index.html` já define `lang="pt-br"`
- Este é um projeto educacional para praticar desenvolvimento web front-end

### 📝 Convenções Linguísticas por Tipo

#### JavaScript (Variáveis, Funções, Comments)
✅ **Faça:**
```javascript
// Trocar imagem com transição
function trocarTransition(element, src) { }
const corEscolhidaAtivo = null;
```

❌ **Não faça:**
```javascript
// Change image with transition
function changeImageTransition(element, src) { }
const selectedColorActive = null;
```

#### HTML (Conteúdo, Atributos, Comentários)
✅ **Faça:**
```html
<input type="text" placeholder="Pesquisar" />
<li><a class="nav-link" href="#hero">Início</a></li>
<h2 class="Novo">Novidade!</h2>
```

❌ **Não faça:**
```html
<input type="text" placeholder="Search" />
<li><a class="nav-link" href="#hero">Home</a></li>
```

#### CSS (Classes e Propriedades)
✅ **Faça:**
```css
.card-mobile { }
.color-option { }
.active { }
```

❌ **Não faça:**
```css
.cartao-movel { }
.opcao-cor { }
.ativo { }
```

> **Regra:** Classes CSS mantêm convenção em **inglês** para consistência com boas práticas web. Valores de propriedades que são strings de conteúdo (como `content`) devem estar em português.

### 📋 Checklist para Contribuições

- [ ] Variáveis e funções em português
- [ ] Comentários em português
- [ ] Conteúdo HTML em português
- [ ] Classes CSS em inglês
- [ ] Strings de erro/aviso em português
- [ ] Atributos `alt` de imagens descritivos em português
- [ ] Atributos `placeholder` em português

### 🎯 Recursos do Projeto

- **Navegação responsiva:** Menu hambúrguer para mobile
- **Categorias:** Mobile, TV & AV, Computadores e Monitores, Acessórios
- **Interatividade:** Troca de cores (Prata/Grafite), overlay em cards ao hover
- **Seção Hero:** Destaque do produto principal com seleção de cores

### 📞 Contato do Autor

Enzo Miguel P. da Silva
- 📧 Email: piresenzo75@gmail.com
- 📱 Telefone: (19) 98869-7421

---

**Nota:** Este projeto não é afiliado oficialmente à Samsung e foi desenvolvido para fins educacionais.

import qrcode
from PIL import Image # Pillow é usado para manipular a imagem, se necessário para ajustes

# --- ATENÇÃO: COLOQUE AQUI O LINK REAL DO SEU SITE HOSPEDADO ---
# Exemplo: url_do_site = "https://seu-usuario.github.io/projeto_amor/"
url_do_site = "COLOQUE_AQUI_O_LINK_DO_SEU_SITE_HOSPEDADO" # Substitua por seu link real!

# Configurações do QR Code
qr = qrcode.QRCode(
    version=1, # A versão controla o tamanho do QR Code (1 é o menor, 40 é o maior)
    error_correction=qrcode.constants.ERROR_CORRECT_H, # Nível de correção de erro (H = 30% dos dados podem ser restaurados)
    box_size=10, # Tamanho de cada "caixa" do QR Code em pixels
    border=4, # Espessura da borda branca ao redor do QR Code
)

qr.add_data(url_do_site)
qr.make(fit=True)

# Gera a imagem
# fill_color e back_color podem ser ajustados para personalizar o QR Code
img = qr.make_image(fill_color="black", back_color="white").convert("RGB")

# Salva a imagem
nome_arquivo = "qrcode_nosso_amor.png"
img.save(nome_arquivo)

print(f"QR Code gerado e salvo como '{nome_arquivo}' na pasta do projeto.")
print(f"O QR Code aponta para: {url_do_site}")

# Opcional: Adicionar um logo no centro (requer mais código e imagem PNG com fundo transparente)
# from PIL import ImageDraw
# logo_path = "caminho/para/seu/logo.png"
# if logo_path:
#     logo = Image.open(logo_path)
#     basewidth = 100 # Ajuste o tamanho do logo
#     wpercent = (basewidth/float(logo.size[0]))
#     hsize = int((float(logo.size[1])*float(wpercent)))
#     logo = logo.resize((basewidth, hsize), Image.LANCZOS)
#
#     pos = ((img.size[0] - logo.size[0]) // 2, (img.size[1] - logo.size[1]) // 2)
#     img.paste(logo, pos, mask=logo) # Use mask para lidar com transparência
#     img.save(nome_arquivo)
#     print("Logo adicionado ao QR Code.")
<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $name = isset($data["name"]) ? htmlspecialchars($data["name"]) : "";
    $email = isset($data["email"]) ? filter_var($data["email"], FILTER_SANITIZE_EMAIL) : "";
    $phone = isset($data["phone"]) ? htmlspecialchars($data["phone"]) : "";
    $message = isset($data["textarea"]) ? htmlspecialchars($data["textarea"]) : "";
    
    if (empty($name) || empty($email)) {
        echo json_encode(["success" => false, "error" => "Nome e e-mail são obrigatórios"]);
        exit;
    }
    
    $to = "birasro@gmail.com";
    $subject = "Contato do site - " . $name;
    
    $body = "<h2>Nova mensagem do formulário de contato</h2>\n";
    $body .= "<p><strong>Nome:</strong> " . $name . "</p>\n";
    $body .= "<p><strong>Email:</strong> " . $email . "</p>\n";
    $body .= "<p><strong>Telefone:</strong> " . ($phone ? $phone : "Não informado") . "</p>\n";
    $body .= "<p><strong>Mensagem:</strong></p>\n";
    $body .= "<p>" . ($message ? nl2br($message) : "Sem mensagem") . "</p>\n";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Mensagem enviada com sucesso!"]);
    } else {
        echo json_encode(["success" => false, "error" => "Erro ao enviar mensagem. Tente novamente."]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Método não permitido"]);
}
?>




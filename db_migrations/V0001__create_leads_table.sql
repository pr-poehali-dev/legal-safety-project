CREATE TABLE t_p51679626_legal_safety_project.leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new',
    source VARCHAR(100) DEFAULT 'website'
);

CREATE INDEX idx_leads_created_at ON t_p51679626_legal_safety_project.leads(created_at DESC);
CREATE INDEX idx_leads_status ON t_p51679626_legal_safety_project.leads(status);

COMMENT ON TABLE t_p51679626_legal_safety_project.leads IS 'Заявки с сайта адвоката';
COMMENT ON COLUMN t_p51679626_legal_safety_project.leads.name IS 'Имя клиента';
COMMENT ON COLUMN t_p51679626_legal_safety_project.leads.phone IS 'Телефон клиента';
COMMENT ON COLUMN t_p51679626_legal_safety_project.leads.message IS 'Описание ситуации клиента';
COMMENT ON COLUMN t_p51679626_legal_safety_project.leads.status IS 'Статус заявки: new, contacted, in_progress, closed';
COMMENT ON COLUMN t_p51679626_legal_safety_project.leads.source IS 'Источник заявки: website, phone, telegram';
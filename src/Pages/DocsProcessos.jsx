import React from 'react';
import { TreeView, TreeItem } from '@mui/lab';
import {  FolderOpen, InsertDriveFile, ExpandMore, ChevronRight, UploadFile } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';

const DocsProcessos = () => {
  return (
    <div>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMore />}
        defaultExpandIcon={<ChevronRight />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        <TreeItem nodeId="1" label="Comunicação">
            <TreeItem nodeId="2" label="Kit Imprensa" >
                <TreeItem nodeId='3' label="Logos" >
                    <TreeItem nodeId='4' label="Marca de São José">
                        <TreeItem nodeId='5' label="ai">
                            <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/ai/logo-sao_jose.ai"><TreeItem nodeId='100' label="logo-sao_jose.ai" icon={<ImageIcon />} /><TreeItem nodeId='101'></TreeItem></a>
                        </TreeItem>
                        <TreeItem nodeId='6' label="eps">
                            <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/eps/logo-sao_jose-02.eps"><TreeItem nodeId='102' label="logo-sao_jose-02.eps" icon={<ImageIcon />} /><TreeItem nodeId='103'></TreeItem></a>
                            <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/eps/logo-sao_jose-03.eps"><TreeItem nodeId='104' label="logo-sao_jose-03.eps" icon={<ImageIcon />} /><TreeItem nodeId='105'></TreeItem></a>
                            <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/eps/logo-sao_jose-04.eps"><TreeItem nodeId='106' label="logo-sao_jose-04.eps" icon={<ImageIcon />} /><TreeItem nodeId='107'></TreeItem></a>
                            <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/eps/logo-sao_jose-05.eps"><TreeItem nodeId='108' label="logo-sao_jose-05.eps" icon={<ImageIcon />} /><TreeItem nodeId='109'></TreeItem></a>
                            <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/eps/logo-sao_jose-06.eps"><TreeItem nodeId='110' label="logo-sao_jose-06.eps" icon={<ImageIcon />} /><TreeItem nodeId='111'></TreeItem></a>
                            <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/eps/logo-sao_jose-07.eps"><TreeItem nodeId='112' label="logo-sao_jose-07.eps" icon={<ImageIcon />} /><TreeItem nodeId='113'></TreeItem></a>
                        </TreeItem>
                        <TreeItem nodeId='7' label="jpeg">

                        </TreeItem>
                        <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Marca%20de%20S%C3%A3o%20Jos%C3%A9/logo-sao_jose.rar"><TreeItem nodeId='8' label="logo-sao_jose.rar" icon={<UploadFile />} /><TreeItem nodeId='25'></TreeItem></a>
                        <TreeItem nodeId='9' label="pdf">
                        
                        </TreeItem>
                        <TreeItem nodeId='10' label="png">

                        </TreeItem>
                        <TreeItem nodeId='11' label="svg">

                        </TreeItem>
                    </TreeItem>
                    <TreeItem nodeId='7' label="Prefeitura de São José">
                        <TreeItem nodeId='12' label="ai">

                        </TreeItem>
                        <TreeItem nodeId='13' label="eps">

                        </TreeItem>
                        <TreeItem nodeId='14' label="jpeg">

                        </TreeItem>
                        <TreeItem nodeId='15' label="pdf">

                        </TreeItem>
                        <a href="https://saojose.sc.gov.br/downloads/Comunica%C3%A7%C3%A3o/Kit%20Imprensa/Logos/Prefeitura%20de%20S%C3%A3o%20Jos%C3%A9/logo-prefeitura_sj.rar"><TreeItem nodeId='16' label="logo-prefeitura_sj.rar" icon={<UploadFile />} /><TreeItem nodeId='23'></TreeItem></a>
                        <TreeItem nodeId='17' label="png">

                        </TreeItem>
                        <TreeItem nodeId='18' label="svg">

                        </TreeItem>
                    </TreeItem>
                </TreeItem>
            </TreeItem>
        
        </TreeItem>
        <TreeItem nodeId="300" label="Documents">
          <TreeItem nodeId="301" label="OSS" />
          <TreeItem nodeId="302" label="MUI">
            <TreeItem nodeId="303" label="index.js" />
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default DocsProcessos;

